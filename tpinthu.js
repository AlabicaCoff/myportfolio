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
const words = ["Life", "a Skill", "Fun", "Creative", "the Future", "Everything"];

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