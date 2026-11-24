// class ProjectItem{
//     constructor(title, desc){
//         this.title = title;
//         this.desc = desc;
//     }
// }
document.addEventListener("DOMContentLoaded", initializeProjects);
function jumpTo(element){
    //element = document.getElementById(elementStr);
    location.href = `#${element}`;
}
async function initializeProjects(){
    const projects = await fetch("./projects.json").then(resp => resp.json());
    const parent = document.getElementsByClassName("projects-section-containter")[0];
    //console.log(projects)
    projects.forEach(project => {
        const element = document.createElement("div");
        const title = document.createElement("h3");
        const desc = document.createElement("p");
        title.innerHTML = project.title;
        title.className = "project-title";
        element.appendChild(title);
        desc.innerHTML = project.desc;
        element.appendChild(desc);
        element.className = "project-container";
        element.addEventListener("click", () => redirectToProject(project.url));
        parent.appendChild(element);   
    });
}
function redirectToProject(url){
    location.href = url;
    
}