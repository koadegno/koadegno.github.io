// Function to load project cards dynamically from JSON file
function loadProjects() {
    fetch('../projects/projects.json')
        .then(response => response.json())
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
					<p alt="No Description"> ${project.description}</p>
                `;

                projectsSection.appendChild(card);
            });
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

// Load the projects when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProjects);
