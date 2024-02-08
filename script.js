// Add your JavaScript code here
document.getElementById('cat').style.backgroundImage = "url('please.gif')";
document.getElementById('musicBefore').src = "music_before.mp3";
document.getElementById('musicAfter').src = "music_after.mp3";

// Photo frame logic
const photoFrame = document.getElementById('photoFrame');
const photoPaths = [
    'Photo 1.jpg',
    'Photo 2.jpg',
    'Photo 3.jpg',
    'Photo 4.jpg',
    'Photo 5.jpg',
    'Photo 6.jpg',
    'Photo 7.jpg',
    'Photo 8.jpg'
];

function getRandomPhoto() {
    return photoPaths[Math.floor(Math.random() * photoPaths.length)];
}

function updatePhoto() {
    const randomPhoto = getRandomPhoto();
    photoFrame.style.backgroundImage = `url('${randomPhoto}')`;
}

// Call the updatePhoto function initially
updatePhoto();

// Set interval to change the photo every few seconds
setInterval(updatePhoto, 5000);
