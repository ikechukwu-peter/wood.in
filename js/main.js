let menuBar = document.querySelector('.menu')
let menuIcons = document.querySelector('.icons-menu')
const hamburger = document.querySelector('.toggle-button');
hamburger.addEventListener('click', function() {
    this.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuIcons.classList.toggle('is-active');
})
