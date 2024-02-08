// Function to handle "Yes" button click
function handleYes() {
    document.getElementById('question').innerText = "Yay, finally!";
    document.getElementById('cat').style.backgroundImage = "url('dance.gif')";
    document.getElementById('cat').style.backgroundSize = "cover";
    document.getElementById('cat').style.animation = "danceAnimation 2s infinite";
    document.getElementById('buttons-container').style.display = "none"; // Hide the buttons
    document.getElementById('photo1').style.display = "none"; // Hide the photos
    document.getElementById('photo2').style.display = "none";
    document.getElementById('photo3').style.display = "none";
    document.getElementById('photo4').style.display = "none";
    document.getElementById('photo5').style.display = "none";
    document.getElementById('photo6').style.display = "none";
    document.getElementById('photo7').style.display = "none";
    document.getElementById('photo8').style.display = "none";
}

// Function to handle "No" button hover
function handleNoHover() {
    const noButton = document.getElementById('noBtn');
    const randomX = Math.floor(Math.random() * (window.innerWidth - noButton.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noButton.clientHeight));
    noButton.style.left = `${randomX}px`;
    noButton.style.top = `${randomY}px`;
}

// Function to play music before the question
function playBeforeMusic() {
    const beforeMusic = document.getElementById('musicBefore');
    beforeMusic.play();
}

// Function to change volume of music
function changeVolume() {
    const volumeControl = document.getElementById('volumeControl');
    const musicBefore = document.getElementById('musicBefore');
    const musicAfter = document.getElementById('musicAfter');
    musicBefore.volume = volumeControl.value;
    musicAfter.volume = volumeControl.value;
}

// Function to position photos randomly
function positionPhotos() {
    const photos = document.querySelectorAll('.photo-container');
    photos.forEach(photo => {
        const randomX = Math.floor(Math.random() * (window.innerWidth - photo.clientWidth));
        const randomY = Math.floor(Math.random() * (window.innerHeight - photo.clientHeight));
        photo.style.left = `${randomX}px`;
        photo.style.top = `${randomY}px`;
    });
}

// Call the function when the page loads
window.addEventListener('load', positionPhotos);
