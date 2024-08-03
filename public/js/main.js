document.addEventListener("DOMContentLoaded", function() {
    // Récupère tous les boutons de catégories
    const categoryButtons = document.querySelectorAll('.button-categories');
    // Sélectionne le conteneur des programmes
    const programsContainer = document.getElementById('programs-container');
    // Par défaut, afficher la catégorie "populaires"
    const defaultCategory = 'populaires';
    const defaultButton = document.querySelector(`.button-categories[data-category="${defaultCategory}"]`);
    
    // Affiche la catégorie par défaut et met à jour les styles
    showCategory(defaultCategory);
    updateButtonStyles(defaultButton);

    // Ajouter un événement click à chaque bouton
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Récupère la catégorie du bouton cliqué
            const category = this.getAttribute('data-category');
            // Affiche la catégorie correspondante
            showCategory(category);
            // Mettre à jour le style des boutons
            updateButtonStyles(this);
        });
    });

    function showCategory(category) {
        // Masquer tous les programmes
        const programs = document.querySelectorAll('.program');
        programs.forEach(program => {
            if (program.classList.contains(category)) {
                program.style.display = 'block'; // Afficher les programmes correspondants
            } else {
                program.style.display = 'none'; // Masquer les autres programmes
            }
        });
    }

    function updateButtonStyles(activeButton) {
        categoryButtons.forEach(button => {
            button.classList.remove('active');
            button.style.backgroundColor = '#FFFFFF'; // Réinitialiser le background des boutons
            button.style.color = '#0084ff'; // Réinitialiser la couleur du texte des boutons
        });
        activeButton.classList.add('active');
        activeButton.style.backgroundColor = '#0084ff'; // Mettre en bleu le bouton actif
        activeButton.style.color = '#FFFFFF'; // Mettre en blanc le texte du bouton actif
    }
});
