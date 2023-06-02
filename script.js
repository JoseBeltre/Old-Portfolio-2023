const header = document.querySelector('header');
const nav = document.querySelector('.nav');
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const aList = document.querySelector('.a_list');


window.addEventListener('scroll', () => {
    if (window.scrollY > 1) {
        header.classList.add('setBgColor')
    } else {
        header.classList.remove('setBgColor')
    }
})

openNav.addEventListener('click', () => {
    nav.classList.toggle('visible');
    aList.classList.toggle('visible');
})
closeNav.addEventListener('click', () => {
    nav.classList.toggle('visible');
    aList.classList.toggle('visible');
})
