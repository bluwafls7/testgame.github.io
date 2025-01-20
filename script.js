const player = document.getElementById('player');
const scoreElement = document.getElementById('score');
let score = 0;
let gameOver = false;

const playerSpeed = 35;
let playerPosition = { x: 185, y: 570 }; // Starting at the bottom center

// Update the player's position on the screen
function updatePlayerPosition() {
    player.style.left = `${playerPosition.x}px`;
    player.style.bottom = `${playerPosition.y}px`;
}

// Move player
function movePlayer(event) {
    if (gameOver) return;
}
/*
    var ArrowUp = "W";
        ArrowDown = "S";
        ArrowLeft = "A";
        ArrowRight = "D";
}*/

    switch (event.key) {
        case 'W':
            if (playerPosition.y < 570) playerPosition.y += playerSpeed;
            break;
        case 'S':
            if (playerPosition.y > 0) playerPosition.y -= playerSpeed;
            break;
        case 'A':
            if (playerPosition.x > 0) playerPosition.x -= playerSpeed;
            break;
        case 'D':
            if (playerPosition.x < 370) playerPosition.x += playerSpeed;
            break;
    }
{
    updatePlayerPosition();
    checkGameOver();
    updateScore();
}

// Check for collision with road obstacles
function checkGameOver() {
    if (playerPosition.y >= 570) {
        // Player reaches the top, score increases
        score += 5;
        playerPosition.y = 570; // Reset to bottom
        updatePlayerPosition();
    } else if (playerPosition.y <= 0) {
        gameOver = true;
        scoreElement.innerText = 'Game Over! Final Score: ' + score;
    }
}

// Update score display
function updateScore() {
    scoreElement.innerText = 'Score: ' + score;
}

// Add event listeners for player movement
document.addEventListener('keydown', movePlayer);

// Initialize game
function startGame() {
    updatePlayerPosition();
}

startGame();
