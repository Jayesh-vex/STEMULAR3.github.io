/*
STEMULAR AI RESPONSE ENGINE
Purpose:
- Uses the prepared STEMULAR answer bank instead of generating new answers.
- Detects the user's question type.
- Finds the relevant prepared term answer.
- For comparisons, matches BOTH terms against the prepared comparison examples.
- Returns Markdown text for the existing chat renderer.

Save/rename this file as:
library/ai-response-engine.js

Load it AFTER stem-answer-bank.js and BEFORE ai-chat-script.js.
*/

(function () {
    "use strict";

    const bank = window.StemAnswerBank;

    if (!bank || !bank.terms) {
        console.error("STEMULAR: StemAnswerBank is not loaded.");
        window.StemAI = {
            respond: function () {
                return "STEMULAR AI answer bank is not loaded.";
            }
        };
        return;
    }

    const terms = Object.keys(bank.terms);
    let pendingPractice = null;
    const customResponses = {
        "can you code": "fuck no."
    };
    const categoryLabels = {
        mathematics: "Mathematics",
        physics: "Physics",
        biology: "Biology",
        chemistry: "Chemistry",
        earthScience: "Earth Science",
        computerScience: "Computer Science",
        engineering: "Engineering"
    };

    function normalize(text) {
        return String(text || "")
            .toLowerCase()
            .replace(/[“”"’']/g, "")
            .replace(/[^a-z0-9\s]/g, " ")
            .replace(/\s+/g, " ")
            .trim();
    }

    function singularize(word) {
        if (word.endsWith("ies")) return word.slice(0, -3) + "y";
        if (word.endsWith("ses")) return word.slice(0, -2);
        if (word.endsWith("s") && !word.endsWith("ss")) return word.slice(0, -1);
        return word;
    }

    function findTerms(query) {
        const q = normalize(query);
        const found = [];
        const singularQuery = q.split(" ").map(singularize).join(" ");
        const paddedQuery = " " + q + " ";
        const paddedSingularQuery = " " + singularQuery + " ";

        // Prefer longest exact term names first.
        const sorted = [...terms].sort((a, b) => normalize(b).length - normalize(a).length);

        for (const term of sorted) {
            const n = normalize(term);
            if (!n) continue;

            const paddedTerm = " " + n + " ";

            if (paddedQuery.includes(paddedTerm)) {
                found.push(term);
                continue;
            }

            // Match common singular/plural wording in either the user's
            // query or the stored term, including multi-word terms.
            const singularTerm = n.split(" ").map(singularize).join(" ");
            if (paddedSingularQuery.includes(" " + singularTerm + " ")) {
                found.push(term);
            }
        }

        return [...new Set(found)];
    }

    function detectType(query) {
        const q = normalize(query);

        if (
            /\b(difference|different|compare|comparison|contrast|versus|vs)\b/.test(q) ||
            /\bhow .* differ\b/.test(q)
        ) {
            return "comparison";
        }

        if (
            /\bpractice\b/.test(q) ||
            /\btest\b/.test(q) ||
            /\bquiz\b/.test(q) ||
            /\bquestion\b/.test(q) ||
            /\bproblem\b/.test(q) ||
            /\bexercise\b/.test(q)
        ) {
            return "practice";
        }

        if (
            /\bhow do i\b/.test(q) ||
            /\bhow to\b/.test(q) ||
            /\bsolve\b/.test(q) ||
            /\bcalculate\b/.test(q) ||
            /\bfind\b/.test(q) ||
            /\bapply\b/.test(q) ||
            /\bsteps\b/.test(q) ||
            /\bprocedure\b/.test(q)
        ) {
            return "procedural";
        }

        return "definition";
    }

    function cleanAnswer(body) {
        // Remove the stored Example query line because the user's actual
        // query is already visible in the chat.
        return String(body || "")
            .replace(/^\s*\*\*Example query:\*\*.*?(?:\r?\n|$)/i, "")
            .trim();
    }

    function getTermSubject(term) {
        const target = normalize(term);
        const categories = window.StemCategories || {};

        for (const category of Object.keys(categoryLabels)) {
            const entries = categories[category] || [];
            const hasTerm = entries.some(function (entry) {
                return (entry.keywords || []).some(function (keyword) {
                    return normalize(keyword) === target;
                });
            });

            if (hasTerm) return categoryLabels[category];
        }

        return "STEM";
    }

    function addDefinitionHeading(answer, term) {
        if (!term || /^###\s+/m.test(answer)) return answer;
        return "### " + term + " — " + getTermSubject(term) + "\n\n" + answer;
    }

    function createPracticePrompt(question, choices, correctLetter) {
        const correctChoice = choices.find(function (choice) {
            return choice.letter === correctLetter;
        });
        if (!correctChoice || choices.length !== 4) return null;

        pendingPractice = {
            correctLetter: correctLetter,
            finalAnswer: correctLetter + " — " + correctChoice.text
        };

        return (
            question.trim() +
            "\n\n**Choose one answer:**\n\n" +
            choices.map(function (choice) {
                return choice.letter + ". " + choice.text;
            }).join("\n") +
            "\n\nReply with **A**, **B**, **C**, or **D** when you are ready."
        );
    }

    function calculationDistractors(finalAnswer) {
        const fraction = finalAnswer.match(/^(-?\d+)\/(\d+)(.*)$/);
        if (fraction) {
            const numerator = Number(fraction[1]);
            const denominator = Number(fraction[2]);
            const unit = fraction[3];
            return [
                (numerator * 2) + "/" + denominator + unit,
                numerator + "/" + (denominator * 2) + unit,
                denominator + "/" + numerator + unit
            ];
        }

        const number = finalAnswer.match(/^(-?\d+(?:\.\d+)?)(.*)$/);
        if (number) {
            const value = Number(number[1]);
            const unit = number[2];
            const format = function (candidate) {
                return Number.isInteger(candidate) ? String(candidate) : String(Number(candidate.toFixed(4)));
            };
            return [
                format(value * 2) + unit,
                format(value / 2) + unit,
                format(value + 1) + unit
            ];
        }

        return [
            "The result cannot be determined from the given information.",
            "The initial value without applying the required calculation.",
            "A result produced by using the wrong relationship."
        ];
    }

    function buildPracticeQuestion(answer) {
        const choices = [...answer.matchAll(/^([A-D])\.\s+(.+)$/gmi)]
            .map(function (match) {
                return { letter: match[1].toUpperCase(), text: match[2].trim() };
            });
        const verifiedChoice = answer.match(
            /\*\*Final verified answer:\*\*\s*\*\*([A-D])\s*[—-]\s*(.+?)\*\*/i
        );
        const firstChoice = answer.search(/^[A-D]\.\s+/mi);

        if (choices.length === 4 && verifiedChoice && firstChoice !== -1) {
            return createPracticePrompt(
                answer.slice(0, firstChoice),
                choices,
                verifiedChoice[1].toUpperCase()
            );
        }

        // Some calculation practice entries store their worked solution rather
        // than A–D choices. Build a four-option question from the verified
        // result so these entries use the same answer-and-feedback flow.
        const verifiedCalculation = answer.match(
            /\*\*Final verified answer:\*\*\s*\*\*(.+?)\*\*\.?\s*$/im
        );
        const solutionStart = answer.search(
            /\n\s*\n\*\*(?:Approach|Step-by-step working|Working|Final verified answer):\*\*/i
        );

        if (!verifiedCalculation || solutionStart === -1) return null;

        const finalAnswer = verifiedCalculation[1].trim();
        return createPracticePrompt(
            answer.slice(0, solutionStart),
            [
                { letter: "A", text: calculationDistractors(finalAnswer)[0] },
                { letter: "B", text: finalAnswer },
                { letter: "C", text: calculationDistractors(finalAnswer)[1] },
                { letter: "D", text: calculationDistractors(finalAnswer)[2] }
            ],
            "B"
        );
    }

    function selectedPracticeChoice(query) {
        const normalized = normalize(query);
        const directChoice = normalized.match(/^(?:answer|choice|option)?\s*([abcd])$/i);
        const namedChoice = normalized.match(/\b(?:answer|choice|option)\s+(?:is\s+)?([abcd])\b/i);
        const match = directChoice || namedChoice;
        return match ? match[1].toUpperCase() : null;
    }

    function respondToPracticeChoice(query) {
        const selected = selectedPracticeChoice(query);
        if (!pendingPractice || !selected) return null;

        const practice = pendingPractice;
        pendingPractice = null;

        if (selected === practice.correctLetter) {
            return "**Correct! The answer is " + practice.finalAnswer + ".**";
        }

        return "**Sadly, that's wrong, but the final verified answer is " + practice.finalAnswer + ".**";
    }

    function comparisonMatches(answer, requestedTerms) {
        if (!answer || !answer.exampleQuery) return false;

        const exampleTerms = findTerms(answer.exampleQuery);
        const wanted = requestedTerms.map(normalize);

        return wanted.every(function (term) {
            return exampleTerms.some(function (exampleTerm) {
                return normalize(exampleTerm) === term;
            });
        });
    }

    function findPreparedAnswer(query, type, foundTerms) {
        // 1. Exact stored queries take priority. This preserves the answer
        // written for the user's requested term order (for example, A vs B
        // instead of returning the duplicate B vs A comparison).
        const normalizedQuery = normalize(query);
        for (const term of terms) {
            const entry = bank.terms[term];
            const section = entry && entry[type];
            if (section && normalize(section.exampleQuery) === normalizedQuery) {
                return cleanAnswer(section.answer);
            }
        }

        // 2. Best case for reworded comparisons: find a stored comparison whose
        // example query contains BOTH requested terms.
        if (type === "comparison" && foundTerms.length >= 2) {
            for (const term of foundTerms) {
                const comparison = bank.terms[term] && bank.terms[term].comparison;
                if (comparison && comparisonMatches(comparison, foundTerms)) {
                    return cleanAnswer(comparison.answer);
                }
            }
        }

        // 3. For normal questions, use the first matching term.
        if (foundTerms.length > 0) {
            const first = bank.terms[foundTerms[0]];
            if (first && first[type] && first[type].answer) {
                return cleanAnswer(first[type].answer);
            }
        }

        return null;
    }

    function findPreparedDefinitionAnswers(foundTerms) {
        return foundTerms.map(function (term) {
            const definition = bank.terms[term] && bank.terms[term].definition;
            if (!definition || !definition.answer) return null;

            return addDefinitionHeading(cleanAnswer(definition.answer), term);
        }).filter(Boolean);
    }

    function respond(query) {
        const practiceResult = respondToPracticeChoice(query);
        if (practiceResult) return practiceResult;

        const customResponse = customResponses[normalize(query)];
        if (customResponse) return customResponse;

        const type = detectType(query);
        const foundTerms = findTerms(query);

        // A request may name several terms. Return each prepared definition
        // instead of silently choosing only the first matched term.
        if (type === "definition" && foundTerms.length > 1) {
            const definitionAnswers = findPreparedDefinitionAnswers(foundTerms);
            if (definitionAnswers.length > 0) {
                return definitionAnswers.join("\n\n---\n\n");
            }
        }

        const answer = findPreparedAnswer(query, type, foundTerms);

        if (answer) {
            if (type === "practice") {
                const practiceQuestion = buildPracticeQuestion(answer);
                if (practiceQuestion) return practiceQuestion;
            }
            if (type === "definition") {
                return addDefinitionHeading(answer, foundTerms[0]);
            }
            return answer;
        }

        if (foundTerms.length > 0) {
            return (
                "I found **" + foundTerms[0] + "** in the STEMULAR answer bank, " +
                "but there is no prepared answer for this exact question type yet.\n\n" +
                "Try asking for its definition, a comparison, a how-to solution, or a practice question."
            );
        }

        return (
            "I couldn't find a prepared STEMULAR answer for that query.\n\n" +
            "Try using the name of a STEM term from the loaded libraries."
        );
    }

    window.StemAI = {
        respond: respond,
        detectType: detectType,
        findTerms: findTerms,
        resetPractice: function () {
            pendingPractice = null;
        }
    };
})();
