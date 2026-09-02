document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const searchTerm = urlParams.get('term');
    const container = document.getElementById('term-details-card');

    if (searchTerm && typeof stemDatabase !== 'undefined') {
        const termData = stemDatabase.find(item => item.term.toLowerCase() === searchTerm.toLowerCase());

        if (termData) {
            // Build Key Concepts list if available
            let conceptsMarkup = "";
            if (termData.keyConcepts && termData.keyConcepts.length > 0) {
                const listItems = termData.keyConcepts.map(concept => `<li style="margin-bottom: 10px; line-height: 1.6;">${concept}</li>`).join('');
                conceptsMarkup = `
                    <div style="margin-top: 30px;">
                        <h3 style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 12px;">Key Concepts</h3>
                        <ul style="padding-left: 20px; color: var(--text-muted);">
                            ${listItems}
                        </ul>
                    </div>
                `;
            }

            // Build Optional Image Banner
            let mediaMarkup = "";
            if (termData.mediaUrl) {
                mediaMarkup = `
                    <div style="width: 100%; height: 500px; overflow: hidden; border-radius: 12px; margin: 20px 0; border: 1px solid var(--glass-border);">
                        <img src="${termData.mediaUrl}" alt="${termData.term}" style="width: 100%; height: 100%; object-fit: cover;">
                    </div>
                `;
            }

            // Render Full Card
            container.innerHTML = `
                <span class="result-category" style="font-size: 0.9rem; letter-spacing: 1.5px;">${termData.category}</span>
                <h1 style="font-size: 2.8rem; font-weight: 700; margin: 10px 0; background: linear-gradient(135deg, var(--text-main), var(--accent-primary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
                    ${termData.term}
                </h1>
                
                <p style="font-size: 1.1rem; color: var(--accent-primary); font-style: italic; margin-bottom: 20px;">
                    "${termData.def}"
                </p>

                ${mediaMarkup}

                <div style="margin-top: 25px;">
                    <h3 style="font-size: 1.2rem; color: var(--text-main); margin-bottom: 10px;">Overview</h3>
                    <p style="font-size: 1rem; color: var(--text-muted); line-height: 1.8;">
                        ${termData.overview || termData.def}
                    </p>
                </div>

                ${conceptsMarkup}

                <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid var(--glass-border); display: flex; gap: 15px; flex-wrap: wrap;">
                    <a href="Lab-Simulation.html" class="action-btn" style="text-decoration: none; display: inline-flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-flask"></i> Launch Simulation
                    </a>
                    <button class="action-btn notice-trigger-btn" data-feature="Ask AI" style="display: inline-flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-robot"></i> Ask AI Assistant
                    </button>
                </div>
            `;
        } else {
            container.innerHTML = `
                <h2 style="color: #f87171; text-align: center;">Terminology Not Found</h2>
                <p style="color: var(--text-muted); text-align: center; margin-top: 10px;">The topic "${searchTerm}" could not be located in our records.</p>
            `;
        }
    } else {
        container.innerHTML = `
            <h2 style="color: var(--text-muted); text-align: center;">No Search Parameter Provided</h2>
        `;
    }
});
