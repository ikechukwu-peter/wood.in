let menuBar = document.querySelector('.menu')
let menuIcons = document.querySelector('.icons-menu')
const hamburger = document.querySelector('.hamburger');

//handles toggling
hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuIcons.classList.toggle('is-active');
})


//Get the button:
let scrollBtn = document.querySelector('.scroll')

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scroll() };

function scroll() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}

//handles back to top button
scrollBtn.addEventListener('click', () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})

//sets preloader
setTimeout(() => {
    document.querySelector('.preloader').classList.toggle('fade')
    document.body.classList.remove('stop-scrolling')
}, 3000)

//hides preloader from the dom element
setTimeout(() => {
    document.querySelector('.preloader').style.display = 'none'

}, 5000)


//Set Text to display
let i = 0;
let txt = 'Wood.In';
let speed = 350;

let text = () => {
    if (i < txt.length) {
        document.querySelector(".preloader-text").innerHTML += txt.charAt(i);
        i++;
        setTimeout(text, speed);
    }
}

window.onload = () => {
    text()
    AOS.init()
}


