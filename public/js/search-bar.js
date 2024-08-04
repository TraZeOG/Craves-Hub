

document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');

    searchForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le formulaire de soumettre normalement

        const query = searchInput.value.trim();
        if (query) {
            // Redirige vers results.html avec la requête en paramètre d'URL
            window.location.href = `results.html?q=${encodeURIComponent(query)}`;
        }
    });
});