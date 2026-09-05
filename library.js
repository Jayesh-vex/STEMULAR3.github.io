// STEMULAR Main Library
// Load the seven category libraries BEFORE this file.

window.StemCategories = window.StemCategories || {};
window.StemLibrary = window.StemLibrary || {};

window.StemLibrary.categories = [
    'mathematics',
    'physics',
    'biology',
    'chemistry',
    'earthScience',
    'computerScience',
    'engineering'
];

window.StemLibrary.getCategory = function(category) {
    return window.StemCategories[category] || [];
};

window.StemLibrary.getAllTerms = function() {
    var all = [];
    this.categories.forEach(function(category) {
        var terms = window.StemCategories[category] || [];
        all = all.concat(terms);
    });
    return all;
};

window.StemLibrary.findMatch = function(query) {
    if (!query || typeof query !== 'string') {
        return null;
    }

    var q = query.toLowerCase().trim();
    if (!q) return null;

    var terms = this.getAllTerms();
    var best = null;
    var bestScore = 0;

    terms.forEach(function(term) {
        var score = 0;
        (term.keywords || []).forEach(function(keyword) {
            var k = String(keyword).toLowerCase().trim();
            if (!k) return;

            if (q === k) {
                score += 100;
            } else if (q.indexOf(k) !== -1) {
                score += k.length >= 8 ? 40 : 20;
            }
        });

        if (score > bestScore) {
            bestScore = score;
            best = term;
        }
    });

    return best ? best.response : null;
};

window.StemLibrary.isLoaded = function() {
    return this.categories.every(function(category) {
        return Array.isArray(window.StemCategories[category]);
    });
};

window.StemLibrary.termCount = function() {
    return this.getAllTerms().length;
};
