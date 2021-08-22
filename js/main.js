let btn = document.querySelector('.menu-btn')
let menuBar = document.querySelector('.menu-items')

btn.addEventListener('click', () => {
    menuBar.classList.toggle('open')
   })