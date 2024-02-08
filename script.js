// Add your JavaScript code here
document.getElementById('cat').style.backgroundImage = "url('please.gif')";
document.getElementById('musicBefore').src = "music_before.mp3";
document.getElementById('musicAfter').src = "music_after.mp3";

function handleYes() {
    document.getElementById('question').innerText = "Yay, you're my Valentine! 💖😍";
    document.getElementById('cat').style.backgroundImage = "url('dance.gif')";
    document.getElementById('playMusicBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
}

function handleNoHover() {
    var noButton = document.getElementById('noBtn');
    var maxX = window.innerWidth - noButton.clientWidth;
    var maxY = window.innerHeight - noButton.clientHeight;
    
    var randomX = Math.floor(Math.random() * maxX);
    var randomY = Math.floor(Math.random() * maxY);
    
    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

function playBeforeMusic() {
    var musicBefore = document.getElementById('musicBefore');
    if (musicBefore.paused) {
        musicBefore.play();
    } else {
        musicBefore.pause();
    }
}

function changeVolume() {
    var volumeControl = document.getElementById('volumeControl');
    var musicBefore = document.getElementById('musicBefore');
    var musicAfter = document.getElementById('musicAfter');
    
    musicBefore.volume = volumeControl.value;
    musicAfter.volume = volumeControl.value;
}
<<<<<<< HEAD
=======

// Function to add fading photos to the container
function addFadingPhotos() {
    const photoContainer = document.getElementById('photos-container');

    for (let i = 1; i <= 8; i++) {
        const photo = document.createElement('img');
        photo.src = `Photo ${i}.jpg`; // Replace 'jpg' with the actual image format
        photo.alt = `Photo ${i}`;
        photo.className = 'photo';
        setRandomPosition(photo);
        photoContainer.appendChild(photo);
    }
}

// Function to set a random position for the photo
function setRandomPosition(photo) {
    const maxX = window.innerWidth - 300;
    const maxY = window.innerHeight - 300;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    photo.style.left = `${randomX}px`;
    photo.style.top = `${randomY}px`;
}

// Call the function to add fading photos
addFadingPhotos();
>>>>>>> 57bbda81f76461d2e22520db8c74bf6d0cf6571d
