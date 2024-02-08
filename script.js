// Add your JavaScript code here
document.getElementById('cat').style.backgroundImage = "url('please.gif')";
document.getElementById('musicBefore').src = "music_before.mp3";
document.getElementById('musicAfter').src = "music_after.mp3";

// Array of photo URLs
const photos = [
    'Photo 1.jpg',
    'Photo 2.jpg',
    'Photo 3.jpg',
    'Photo 4.jpg',
    'Photo 5.jpg',
    'Photo 6.jpg',
    'Photo 7.jpg',
    'Photo 8.jpg'
];

let currentPhotoIndex = 0;

// Function to update the photo in the fading frame
function updatePhoto() {
    const photoFrame = document.getElementById('photoFrame');
    photoFrame.style.backgroundImage = `url('${photos[currentPhotoIndex]}')`;
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
}

// Initial display of the first photo
updatePhoto();

// Interval to update the photo every 5 seconds
setInterval(updatePhoto, 5000);

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
