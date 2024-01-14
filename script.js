document.addEventListener('DOMContentLoaded', function () {
    // Initially show the "Please" cat GIF
    showCatImage('please.gif');
    // Play the music before the question
    document.getElementById('musicBefore').play();
});

function handleYes() {
    document.getElementById('question').innerText = 'Yay, finally!';
    // Show the dancing cat GIF after clicking Yes
    showCatImage('dance.gif', 'dance 2s infinite');
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
    // Pause the music before the question
    document.getElementById('musicBefore').pause();
    // Play the music after the question
    document.getElementById('musicAfter').play();
}

function handleNoHover() {
    const noBtn = document.getElementById('noBtn');
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function showCatImage(src, animation = '') {
    const catDiv = document.getElementById('cat');
    catDiv.style.backgroundImage = `url(${src})`;
    if (animation !== '') {
        catDiv.style.animation = animation;
    }
}
