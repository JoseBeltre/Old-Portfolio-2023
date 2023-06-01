const nav = document.querySelector('.nav');
const openNav = document.querySelector('.open-nav');
const closeNav = document.querySelector('.close-nav');
const aList = document.querySelector('.a_list');


openNav.addEventListener('click', () => {
    nav.classList.toggle('visible');
    aList.classList.toggle('visible');
})
closeNav.addEventListener('click', () => {
    nav.classList.toggle('visible');
    aList.classList.toggle('visible');

})