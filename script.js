document.addEventListener("DOMContentLoaded", function () {
    const outerPhotos = document.querySelectorAll(".photo-outer");
    const noButton = document.getElementById("noBtn");

<<<<<<< HEAD
    // Function to display a random photo on the outer edges
    function displayRandomPhoto() {
        // Reset opacity for all outer photos
        outerPhotos.forEach((photo) => {
            photo.style.opacity = 0;
        });

        // Choose a random photo and display it
        const randomIndex = Math.floor(Math.random() * outerPhotos.length);
        const randomPhoto = outerPhotos[randomIndex];
        randomPhoto.style.opacity = 1;
    }

    // Initially display a random photo
    displayRandomPhoto();

    // Set interval to change photos every few seconds
    setInterval(displayRandomPhoto, 5000);

    // Function to move the "No" button to a random spot
    function moveNoButton() {
        const maxX = window.innerWidth - noButton.clientWidth;
        const maxY = window.innerHeight - noButton.clientHeight;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
=======
    // Setting initial state
    let catAnimation = "please"; // Initial cat animation
    let volume = 0.5; // Initial volume

    // Function to play the before music
    window.playBeforeMusic = function () {
        musicBefore.play();
        playMusicBtn.style.display = "none"; // Hide the button after clicking
    };

    // Function to handle the Yes button click
    window.handleYes = function () {
        document.getElementById("question").innerText = "Yay, finally! 💃🎉"; // Change the question
        catAnimation = "dance"; // Change cat animation
        cat.style.backgroundImage = `url('dance.gif')`; // Change cat animation
        musicBefore.pause(); // Pause the before music
        musicAfter.play(); // Play the after music
        noBtn.style.display = "none"; // Hide the No button
    };

    // Function to handle the No button hover
    window.handleNoHover = function () {
        // Move the No button to a random location
        const randomX = Math.random() * (window.innerWidth - noBtn.clientWidth);
        const randomY = Math.random() * (window.innerHeight - noBtn.clientHeight);
        noBtn.style.left = `${randomX}px`;
        noBtn.style.top = `${randomY}px`;
    };

    // Function to change volume
    window.changeVolume = function () {
        volume = volumeControl.value;
        musicBefore.volume = volume;
        musicAfter.volume = volume;
    };

    // Update cat animation
    function updateCatAnimation() {
        cat.style.backgroundImage = `url('${catAnimation}.gif')`;
        cat.style.width = "300px";
        cat.style.height = "300px";
        cat.style.backgroundSize = "cover";
        cat.style.backgroundRepeat = "no-repeat";
        cat.style.margin = "0 auto";
>>>>>>> parent of e6f2ada (3)
    }

    // Add event listener for mouseover on the "No" button
    noButton.addEventListener("mouseover", moveNoButton);
});
