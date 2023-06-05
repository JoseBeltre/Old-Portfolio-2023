import { Project } from "./projects.js";

const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const aList = document.querySelector('.a_list');
const menuLinks = document.querySelectorAll('.a_list a[href^="#"]');
const progressbars = document.querySelectorAll('.progressbar span');
const showAnimation = document.querySelectorAll('.animate');
const projectsSection = document.querySelector('.projects__div')
const projects = document.querySelectorAll('.project')

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        }
    });
});
showAnimation.forEach((li) => {
    observer.observe(li)
});


const projectsArray = [
    new Project('Calculator', 'Basic calulator made with HTML, CSS and JS', 'calculator.jpg','./projects/Calculator/calculator.html',),
    new Project('Mokepon', 'A player VS machine game', 'mokepon.jpg','./projects/Mokepon/mokepon.html',),
    new Project('Register', 'A register with differenst inputs validations', 'register.jpg','./projects/Register - Js Practicing/register.html',),
    new Project('Ripley(Replica)', 'A replica of the reply website for web layout practicing ', 'ripley.jpg','./projects/Ripley - Replica/index.html',),
    new Project('Rock, Paper and Scissors', 'A basic RP&S game', 'rock-paper-scissors.jpg','./projects/PPyT/4-Piedra-Papel-Tijeras.html',)
]

projectsArray.forEach(project => {
    project.create(projectsSection);
});




window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        header.classList.add('setBgColor')
    } else {
        header.classList.remove('setBgColor')
    }
});

openNav.addEventListener('click', () => {
    nav.classList.toggle('visible');
});
closeNav.addEventListener('click', () => {
    nav.classList.toggle('visible');
});

menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('visible');
    })
});

progressbars.forEach(bar => {
    bar.style.width = bar.textContent;
});