// Function to load project cards dynamically from JSON file
function loadProjects() {
    fetch('projects/projects.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            const projectsSection = document.getElementById('projects-section');

            data.forEach(project => {
                const card = document.createElement('div');
                card.className = 'project-card';

                card.innerHTML = `
                    <a href="${project.link}">
                        <img src="${project.image}" alt="${project.title}">
                        <h3>${project.title}</h3>
                    </a>
                `;

                projectsSection.appendChild(card);
            });
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

// Load the projects when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProjects);
