// Add your JavaScript code here
document.getElementById('cat').style.backgroundImage = "url('please.gif')";
document.getElementById('musicBefore').src = "music_before.mp3";
document.getElementById('musicAfter').src = "music_after.mp3";

// List of background images
const backgroundImages = ['Photo1.jpg', 'Photo2.jpg', 'Photo3.jpg', 'Photo4.jpg'];

// Set a random background image
const randomIndex = Math.floor(Math.random() * backgroundImages.length);
document.body.style.backgroundImage = `url('${backgroundImages[randomIndex]}')`;

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
