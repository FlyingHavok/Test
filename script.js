// Add your JavaScript code here
document.getElementById('cat').style.backgroundImage = "url('please.gif')";
document.getElementById('musicBefore').src = "music_before.mp3";
document.getElementById('musicAfter').src = "music_after.mp3";

// Photo frame logic
const photoFrame = document.getElementById('photoFrame');
const photoPaths = ['photo1.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg', 'photo5.jpg', 'photo6.jpg', 'photo7.jpg', 'photo8.jpg'];

function setRandomPhoto() {
    const randomPhotoPath = photoPaths[Math.floor(Math.random() * photoPaths.length)];
    photoFrame.style.backgroundImage = `url('${randomPhotoPath}')`;
}

function fadeInPhoto() {
    photoFrame.style.opacity = '1';
}

function fadeOutPhoto() {
    photoFrame.style.opacity = '0';
    setTimeout(() => {
        setRandomPhoto();
        fadeInPhoto();
    }, 1000); // 1 second delay before fading in next photo
}

// Initial setup
setRandomPhoto();
fadeInPhoto();
setInterval(fadeOutPhoto, 5000); // Change photo every 5 seconds
