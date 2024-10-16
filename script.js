document.addEventListener("DOMContentLoaded", () => {
    const projects = [
        { name: "Project 1", description: "A cool project about React." },
        { name: "Project 2", description: "Another awesome web development project." }
    ];

    const projectList = document.getElementById("project-list");

    projects.forEach(project => {
        const projectItem = document.createElement("div");
        projectItem.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        projectList.appendChild(projectItem);
    });
});
