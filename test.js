document.addEventListener('DOMContentLoaded', function () {
    // Initially show the "Please" cat GIF
    showCatEmbed('2578585799545816842');
});

function handleYes() {
    document.getElementById('question').innerText = 'Yay, finally! <3';
    // Show the dancing cat GIF after clicking Yes
    showCatEmbed('25266051', 'dance 2s infinite');
    document.getElementById('yesBtn').style.display = 'none';
    document.getElementById('noBtn').style.display = 'none';
}

function handleNoHover() {
    const noBtn = document.getElementById('noBtn');
    const randomX = Math.floor(Math.random() * (window.innerWidth - noBtn.clientWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - noBtn.clientHeight));
    noBtn.style.position = 'absolute';
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
}

function showCatEmbed(postId, animation = '') {
    const catDiv = document.getElementById('cat');
    catDiv.innerHTML = `<iframe src="https://tenor.com/embed/${postId}/?autoplay=true" width="100%" height="100%" frameborder="0" class="tenor-gif-embed" allowfullscreen></iframe>`;
    if (animation !== '') {
        catDiv.style.animation = animation;
    }
}
