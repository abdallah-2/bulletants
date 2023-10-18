document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");
    const startButton = document.getElementById("start-button");
    const scoreElement = document.getElementById("score");
    const timerElement = document.getElementById("timer");
    const gameDuration = 30; // in seconds
    const antsToSquish = 10; // number of ants to squish

    let score = 0;
    let timeLeft = gameDuration;
    let antsSquished = 0;
    let gameActive = false;

    startButton.addEventListener("click", startGame);

    function startGame() {
        resetGame();
        startButton.disabled = true;
        startButton.style.backgroundColor = "#bbb";
        gameActive = true;
        createAnts();
        updateTimer();

        const gameInterval = setInterval(function () {
            if (timeLeft <= 0) {
                endGame(gameInterval);
            } else {
                timeLeft--;
                updateTimer();
            }
        }, 1000);
    }

    function resetGame() {
        score = 0;
        timeLeft = gameDuration;
        antsSquished = 0;
        startButton.disabled = false;
        startButton.style.backgroundColor = "#4caf50";
        scoreElement.innerText = score;
        timerElement.innerText = timeLeft;
        gameContainer.innerHTML = "";
    }

    function updateTimer() {
        timerElement.innerText = timeLeft;
    }

    function createAnts() {
        for (let i = 0; i < antsToSquish; i++) {
            const ant = document.createElement("div");
            ant.className = "ant";
            ant.style.left = randomPosition(0, gameContainer.offsetWidth - 50) + "px";
            ant.style.top = randomPosition(0, gameContainer.offsetHeight - 50) + "px";
            gameContainer.appendChild(ant);

            ant.addEventListener("click", function () {
                if (gameActive && !ant.classList.contains("squished")) {
                    ant.classList.add("squished");
                    score++;
                    antsSquished++;
                    scoreElement.innerText = score;

                    if (antsSquished === antsToSquish) {
                        endGame();
                    }
                }
            });
        }
    }

    function endGame(interval) {
        clearInterval(interval);
        gameActive = false;
        startButton.disabled = false;
        startButton.style.backgroundColor = "#4caf50";
        gameContainer.innerHTML = `<div id="game-over">Game Over</div>`;
    }

    function randomPosition(min, max) {
        return Math.random() * (max - min) + min;
    }
});
