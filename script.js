// Function to start the celebration
function startCelebration() {
    // Play the audio
    const audio = document.getElementById('birthday-audio');
    audio.play();  // Play the audio when the button is clicked

    // Creating a simple confetti effect
    const numberOfConfetti = 100;
    const colors = ['#ff6347', '#ff7f50', '#ff1493', '#ffa07a', '#f08080'];

    for (let i = 0; i < numberOfConfetti; i++) {
        const confettiPiece = document.createElement('div');
        confettiPiece.classList.add('confetti');
        confettiPiece.style.position = 'absolute';
        confettiPiece.style.top = `${Math.random() * 100}%`;
        confettiPiece.style.left = `${Math.random() * 100}%`;
        confettiPiece.style.width = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.height = `${Math.random() * 10 + 5}px`;
        confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confettiPiece.style.opacity = '0.8';
        confettiPiece.style.animation = `fall ${Math.random() * 3 + 3}s linear infinite`;
        document.body.appendChild(confettiPiece);

        setTimeout(() => {
            confettiPiece.remove();
        }, 3000); // Remove confetti after 3 seconds
    }
}
