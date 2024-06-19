function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

function goToFunction(target) {
    let wrapper = document.querySelector(".wrapper");
    wrapper.scrollTop = target;
    document.documentElement.scrollTop = target;
}

const dynamicYear = document.querySelector(".footer-text span");
const currentYear = new Date().getFullYear();
dynamicYear.textContent = currentYear;

const dynamicText = document.querySelector(".profile-text-p2 span")
const words = ["Life", "a Skill", "Fun", "Creative", "the Future", "Everywhere"];

let wordIndex = 0;
let charIndex = 0;
let isDeleted = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleted && charIndex < currentWord.length) {
        // If condition is true, type the next character
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleted && charIndex > 0) {
        // If condition is true, remove the previous character
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleted = !isDeleted;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleted? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200)
    }
}

typeEffect();

let slideIndex = [1,1,1];
let slideId = ["mySlides1", "mySlides2", "mySlides3"]
showSlides(1, 0);
showSlides(1, 1);
showSlides(1, 2);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

setInterval(function() {
    plusSlides(1, 0);
}, 15000);

setInterval(function() {
    plusSlides(1, 1);
}, 20000);

setInterval(function() {
    plusSlides(1, 2);
}, 25000);