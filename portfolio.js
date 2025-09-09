//Tri portfolio
document.addEventListener('DOMContentLoaded', () => {

    const filterInputs = document.querySelectorAll('.filter input[type="checkbox"]');
    const portfolioProjects = document.querySelectorAll('.box-portfolio');

    // Ajoute un écouteur d'événement à chaque case à cocher
    filterInputs.forEach(input => {
        input.addEventListener('change', filterProjects);
    });

    function filterProjects() {
        const checkedFilters = [];

        // Récupère la liste des filtres qui sont cochés
        filterInputs.forEach(input => {
            if (input.checked) {
                // On récupère le data-filter du label parent
                const filterValue = input.parentElement.dataset.filter;
                checkedFilters.push(filterValue);
            }
        });

        // Si aucun filtre n'est coché, on affiche tous les projets
        if (checkedFilters.length === 0) {
            portfolioProjects.forEach(project => {
                project.style.display = 'block';
            });
            return;
        }

        // Sinon, on filtre les projets
        portfolioProjects.forEach(project => {
            const projectTechs = project.dataset.tech.split(' ');
            let showProject = false;

            // Vérifie si le projet contient au moins une des technologies cochées
            checkedFilters.forEach(filter => {
                if (projectTechs.includes(filter)) {
                    showProject = true;
                }
            });

            // Affiche ou masque le projet en fonction du résultat
            if (showProject) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    }

});