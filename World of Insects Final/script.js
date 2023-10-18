// JavaScript for Image Slideshow
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    
    if (n > slides.length) { 
        slideIndex = 1; 
    }
    if (n < 1) { 
        slideIndex = slides.length; 
    }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}


// ant game is below

const antsContainer = document.getElementById('ants-container');
const gameOverMessage = document.getElementById('game-over-message');
const playAgainButton = document.getElementById('play-again-button');

const totalAnts = 30;
let squishedAnts = 0;

playAgainButton.addEventListener('click', playAgain);

function squishAnt(event) {
    const ant = event.target;
    ant.classList.add('squished-ant');
    ant.removeEventListener('click', squishAnt);
    squishedAnts++;

    if (squishedAnts === totalAnts) {
        gameOverMessage.style.display = 'block';
        playAgainButton.style.display = 'block';
    }
}

function createAnt() {
    const ant = document.createElement('div');
    ant.className = 'ants';
    ant.style.top = `${Math.random() * 85 + 5}%`;
    ant.style.left = `${Math.random() * 85 + 5}%`;
    ant.addEventListener('click', squishAnt);
    antsContainer.appendChild(ant);
}

function playAgain() {
    // Remove all squished ants and reset the game
    const squishedAnts = document.querySelectorAll('.squished-ant');
    squishedAnts.forEach((ant) => ant.remove());

    gameOverMessage.style.display = 'none';
    playAgainButton.style.display = 'none';

    for (let i = 0; i < totalAnts; i++) {
        createAnt();
    }
}

for (let i = 0; i < totalAnts; i++) {
    createAnt();
}
