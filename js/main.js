let menuBar = document.querySelector('.menu')
let menuIcons = document.querySelector('.icons-menu')
let icons = document.querySelectorAll('.modal-pop')
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelectorAll('.links')
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


//handles toggling
hamburger.addEventListener('click', function () {
    this.classList.toggle('is-active');
    menuBar.classList.toggle('is-active');
    menuIcons.classList.toggle('is-active');
})

//Toggle active state for links and remove from all the elements
navLinks.forEach(elements => {
    elements.addEventListener('click', (e) => {
        navLinks.forEach(navLink => {
            navLink.classList.remove('is-active')
            e.target.classList.add('is-active')
            menuBar.classList.remove('is-active')
            hamburger.classList.remove('is-active');
            menuIcons.classList.remove('is-active');
        })

    })
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


// MODAL
// When the user clicks on the button, open the modal
icons.forEach(icon => {
    icon.addEventListener('click', (e) => {
        menuBar.classList.remove('is-active')
        hamburger.classList.remove('is-active');
        menuIcons.classList.remove('is-active');
        modal.style.display = "block"; 
    })
})

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onload = () => {
    text()
    AOS.init()
}


