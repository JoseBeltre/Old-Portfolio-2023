const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const aList = document.querySelector('.a_list');
const menuLinks = document.querySelectorAll('.a_list a[href^="#"]');
const progressbars = document.querySelectorAll('.progressbar span');
const showAnimation = document.querySelectorAll('.animate');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show')
        } else {
            entry.target.classList.remove('show')
            
        }
    });
});
showAnimation.forEach((li) => {
    observer.observe(li)
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