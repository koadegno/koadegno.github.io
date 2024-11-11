// Function to load project cards dynamically from JSON file
function loadProjects() {
    fetch('../projects/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsSection = document.getElementById('projects-section');
            data.forEach(project => {
                const card = document.createElement('div');
				card.classList.add("rounded-xl", "border", "bg-card", "text-card-foreground", "shadow", "flex", "flex-col");

				// Image loading
				const cardImg = document.createElement("div");
				cardImg.classList.add("flex", "flex-col", "space-y-1.5", "p-6");
				cardImg.innerHTML = `<img class="h-32 max-w-full object-cover object-top" src="${project.image}" width="500" height="300" alt="${project.title} style="color:transparent"">`;
				card.appendChild(cardImg);

				// Title and description text loading
				const cardText = document.createElement("div");
				cardText.classList.add("p-6", "pt-0", "flex", "flex-col", "gap-2")
				cardText.innerHTML = `<h3 class="font-semibold leading-none tracking-tight">
				${project.title}
				</h3>
				<div class"prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
					<p>${project.description}</p>
				</div>
				`;
				card.appendChild(cardText);

				// Add tools to the card
				const cardTools = document.createElement('div');
				cardTools.classList.add("p-6","pt-0", "flex",  "flex-col", "items-start", "justify-between", "gap-4",);

				const toolsContainer = document.createElement("div");
				toolsContainer.classList.add("mt-2", "flex", "flex-wrap", "gap-1" )

				project.tools.forEach(tool => {
					toolsContainer.innerHTML += `
					<div class="inline-flex items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 px-1 py-0 text-[10px]">
					${tool}
					</div>\n`

				});

				cardTools.appendChild(toolsContainer);

				// Buttons
				if ((project.code_link && project.code_link != "") || (project.link && project.link != "")){

					const buttonsDiv = document.createElement("div");
					buttonsDiv.classList.add("flex", "flex-row", "flex-wrap", "items-start", "gap-1")
					// Source button
					if (project.code_link && project.code_link != "") {
						buttonsDiv.innerHTML += `<a target="_blank" href="${project.code_link}"> <div class="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github size-3"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>Source</div></a></div>`
	
					}
	
					// Description page link
					if (project.link && project.link != "") {
						buttonsDiv.innerHTML += `<a target="_blank" href="${project.link}"> <div class="items-center rounded-md border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80 flex gap-2 px-2 py-1 text-[10px]"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-external-link size-3">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>Description Page</div></a></div>`
					}
					cardTools.appendChild(buttonsDiv)

				}

				card.appendChild(cardTools);

                projectsSection.appendChild(card);
            });
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

// Load the projects when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProjects);
