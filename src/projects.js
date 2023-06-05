//Class for projects
export class Project{
    constructor(title, description, img, url){
        this.title = title;
        this.description = description;
        this.img = img;
        this.url = url;
    }
    create(fatherElement){
        const div = document.createElement('div');
        div.classList.add('project');
        div.innerHTML = `
        <a href="${this.url}" target="_blank">
        <div  class="project-img">
            <img src="./assets/${this.img}">
        </div>
        <div class="project-description">
            <h3>${this.title}</h3>
            <p>${this.description}</p>
        </div>
        </a>
        `;

        fatherElement.appendChild(div)
    }
}