// Function to load project cards dynamically from JSON file
function loadProjects() {
    fetch('../projects/projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsSection = document.getElementById('projects-section');
            data.forEach(project => {
                const card = document.createElement('div');
				card.classList.add("rounded-xl", "border", "bg-card", "text-card-foreground", "shadow", "flex", "flex-col");
				// card.className = 'project-card';

				const card_img = document.createElement("div");
				card_img.classList.add("flex", "flex-col", "space-y-1.5", "p-6");
				card_img.innerHTML = `<img class="h-32 max-w-full object-cover object-top" src="${project.image}" width="500" height="300" alt="${project.title} style="color:transparent"">`;

				card.appendChild(card_img);

				const card_text = document.createElement("div");
				card_text.classList.add("p-6", "pt-0", "flex", "flex-col", "gap-2")

				card_text.innerHTML = `<h3 class="font-semibold leading-none tracking-tight">
				${project.title}
				</h3>
				<div class"max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert flex">
					<p>${project.description}</p>
				</div>
				
				<div class="mt-2 flex-col p-6 pt-0 flex ">
					<a href="${project.link}">View Project</a>
				
				</div>
				`;
// make the View Project  link be at the same position in each cards
				card.appendChild(card_text);

				const card_tools = document.createElement('div');
				card_tools.classList.add("p-6","pt-0", "flex", "h-full", "flex-col", "items-start", "justify-between", "gap-4");
				const card_container_tools = document.createElement("div");

				card_container_tools.classList.add("mt-2", "flex", "flex-wrap", "gap-1", )

				project.tools.forEach(tool => {
					tools_html = document.createElement('div');
					tools_html.classList.add("inline-flex", "items-center", "rounded-md", "border", "font-semibold", "transition-colors", "focus:outline-none", "focus:ring-2", "focus:ring-ring", "focus:ring-offset-2", "border-transparent", "bg-secondary", "text-secondary-foreground", "hover:bg-secondary/80", "px-1", "py-0", "text-[10px]",);
					tools_html.innerText = tool;
					card_tools.appendChild(tools_html);

				});
				card_container_tools.appendChild(card_tools);
				
				card.appendChild(card_container_tools);

                // card.innerHTML = `
                //     <a href="${project.link}">
                //         <img src="${project.image}" alt="${project.title}">
                //         <h3>${project.title}</h3>
				// 	</a>
				// 	<div class="year">${project.year || 'N/A'}</div>
				// 	<p alt="No Description"> ${project.description}</p>
                // `;

				// card.innerHTML = `
                //     <img src="${project.image}" alt="${project.title}">
                //     <div class="content">
                //         <a href="${project.link}">
                //             <h3>${project.title}</h3>
                //         </a>
                //         <div class="year">${project.year || 'N/A'}</div>
                //         <p>${project.description || 'No Description'}</p>
                //     </div>
                // `;


                projectsSection.appendChild(card);
            });
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}

// Load the projects when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', loadProjects);
