document.addEventListener('DOMContentLoaded', function () {
    // Initially show the "Please" cat GIF
    showCatEmbed('2578585799545816842');
});

function handleYes() {
    document.getElementById('question').innerText = 'Yay, Finally! <3';
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
    catDiv.innerHTML = ''; // Clear existing content
    const embedDiv = document.createElement('div');
    embedDiv.className = 'tenor-gif-embed';
    embedDiv.dataset.postid = postId;
    embedDiv.dataset.shareMethod = 'host';
    embedDiv.dataset.aspectRatio = '1';
    embedDiv.dataset.width = '100%';
    catDiv.appendChild(embedDiv);

    // Re-create the Tenor embed script
    const existingScript = document.getElementById('tenor-embed-script');
    if (existingScript) {
        existingScript.remove();
    }

    const script = document.createElement('script');
    script.src = 'https://tenor.com/embed.js';
    script.id = 'tenor-embed-script';
    script.async = true;
    document.body.appendChild(script);

    if (animation !== '') {
        catDiv.style.animation = animation;
    }
}
