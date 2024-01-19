// script.js
function showRandomMessage() {
    const messageBox = document.getElementById('message-box');
    messageBox.classList.add('active');

    document.getElementById('question-container').style.display = 'none';

    // Play background sound
    playBackgroundSound();
}

function teleportNoButton() {
    const noButton = document.getElementById('no-button');
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;

    const newX = Math.floor(Math.random() * (screenWidth - 100));
    const newY = Math.floor(Math.random() * (screenHeight - 40));

    noButton.style.position = 'fixed';
    noButton.style.left = `${newX}px`;
    noButton.style.top = `${newY}px`;
}

function resetProgram() {
    const noButton = document.getElementById('no-button');
    noButton.style.position = 'relative';
    noButton.style.left = 'auto';
    noButton.style.top = 'auto';

    const messageBox = document.getElementById('message-box');
    messageBox.classList.remove('active');

    document.getElementById('question-container').style.display = 'block';

    // Stop background sound
    stopBackgroundSound();
}

let audioElement;

function playBackgroundSound() {
    audioElement = new Audio('abc.mp3');
    audioElement.loop = true;
    audioElement.play();
}

function stopBackgroundSound() {
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
}
