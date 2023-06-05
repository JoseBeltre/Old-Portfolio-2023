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
        <div>
        <h3>${this.title}</h3>
        <p>${this.description}</p>
        </div>
        </a>
        `;

        div.style.backgroundImage = `url(../assets/${this.img})`;
        fatherElement.appendChild(div)
    }
}