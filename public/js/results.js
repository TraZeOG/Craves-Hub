document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    const resultsContainer = document.getElementById('results-container');
    const resultsTitle = document.getElementById('results-title');

    if (query) {
        // Mettre à jour le texte du titre avec la recherche de l'utilisateur
        resultsTitle.textContent = `Résultat pour la recherche : "${query}"`;

        // Charger les données des programmes à partir du fichier JSON
        fetch('data/programs.json')
            .then(response => response.json())
            .then(data => {
                const filteredPrograms = data.programs.filter(program => {
                    return program.title.toLowerCase().includes(query.toLowerCase());
                });
                displayResults(filteredPrograms);
            })
            .catch(error => console.error('Erreur lors du chargement des programmes:', error));
    } else {
        resultsContainer.innerHTML = '<p>Aucun résultat trouvé.</p>';
    }

    function displayResults(programs) {
        if (programs.length === 0) {
            resultsContainer.innerHTML = '<p>Aucun résultat trouvé.</p>';
            return;
        }

        programs.forEach(program => {
            const programElement = document.createElement('article');
            programElement.classList.add('program');
            programElement.style.backgroundImage = `url(${program.image})`;
            programElement.innerHTML = `
                <a href="${program.link}">
                    <div class="article-content">
                        <h3>${program.title}</h3>
                    </div>
                </a>`;
            resultsContainer.appendChild(programElement);
        });
    }
});
