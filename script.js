// Get elements
const catElement = document.getElementById("cat");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const playMusicBtn = document.getElementById("playMusicBtn");
const volumeControl = document.getElementById("volumeControl");

// Flag to check if the No button has been clicked
let isClicked = false;

// Event listener for the Yes button click
function handleYesClick() {
    document.getElementById("question").innerHTML = "Yay, finally! 💃";
    catElement.style.backgroundImage = "url('dance.gif')";
    noBtn.style.display = "none"; // Hide the No button
    isClicked = true;
}

// Function to move the No button to a random position on hover
function moveNoButton() {
    const newX = Math.random() * (window.innerWidth - noBtn.clientWidth);
    const newY = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.left = newX + "px";
    noBtn.style.top = newY + "px";
}

// Event listener for the No button hover
noBtn.addEventListener("mouseover", handleNoHover);

// Function to handle hover effect on the No button
function handleNoHover() {
    if (!isClicked) {
        // Move the No button to a random position
        moveNoButton();
    }
}

// Function to play music
function playMusic() {
    const musicBefore = new Audio('music_before.mp3');
    musicBefore.play();
}

// Function to adjust volume
function adjustVolume() {
    const volumeValue = volumeControl.value / 100;
    // Adjust volume for the background music or any other audio elements
}

// ... any other functions or code ...

