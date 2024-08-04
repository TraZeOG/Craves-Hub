
document.addEventListener("DOMContentLoaded", function() {
    const categoryButtons = document.querySelectorAll('.button-categories');
    const programsContainer = document.getElementById('categories-container');
    const defaultCategory = 'populaires';

    // Charger les données des programmes à partir du fichier JSON
    fetch('http://localhost:3000/data/programs.json')
        .then(response => response.json())
        .then(data => {
            // Afficher la catégorie par défaut
            showCategory(defaultCategory, data.programs);
            updateButtonStyles(document.querySelector(`.button-categories[data-category="${defaultCategory}"]`));

            // Ajouter un événement click à chaque bouton de catégorie
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const category = this.getAttribute('data-category');
                    showCategory(category, data.programs);
                    updateButtonStyles(this);
                });
            });
        })
        .catch(error => console.error('Erreur lors du chargement des programmes:', error));

    function showCategory(category, programs) {
        programsContainer.innerHTML = ''; // Vider le conteneur des programmes
        programs.forEach(program => {
            if (program.categories.includes(category)) {
                const programElement = document.createElement('article');
                programElement.style.backgroundImage = `url(${program.image})`;
                programElement.innerHTML = `
                <a href="${program.link}">
                    <div class="article-content">
                        <h3>${program.title}</h3>
                    </div>
                </a>`;

                programsContainer.appendChild(programElement);
            }
        });
    }

    function updateButtonStyles(activeButton) {
        categoryButtons.forEach(button => {
            button.classList.remove('active');
            button.style.backgroundColor = '#FFFFFF';
            button.style.color = '#0084ff';
        });
        activeButton.classList.add('active');
        activeButton.style.backgroundColor = '#0084ff';
        activeButton.style.color = '#FFFFFF';
    }

});