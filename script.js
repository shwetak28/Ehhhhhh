document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    const questionDiv = document.getElementById('question');
    const thanksDiv = document.getElementById('thanks');
    const backgroundMusic = document.getElementById('background-music');

    yesButton.addEventListener('click', () => {
        questionDiv.style.display = 'none';
        thanksDiv.style.display = 'block';

        // Play the background music
        backgroundMusic.play().catch(error => {
            console.log('Autoplay prevented: ', error);
        });
    });

    noButton.addEventListener('mouseover', () => {
        const containerRect = document.querySelector('.container').getBoundingClientRect();
        const noButtonRect = noButton.getBoundingClientRect();

        const maxX = containerRect.width - noButtonRect.width;
        const maxY = containerRect.height - noButtonRect.height;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });

    // Create falling hearts
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        document.body.appendChild(heart);

        // Start position for hearts to fall from top to bottom
        heart.style.left = `${Math.random() * window.innerWidth}px`;

        // Adjust animation duration based on random values for variety
        const animationDuration = Math.random() * 10 + 10; // 10s to 20s
        heart.style.animationDuration = `${animationDuration}s`;

        heart.addEventListener('animationend', () => {
            heart.remove();
        });
    }

    // Create hearts at intervals
    setInterval(createHeart, 1000); // Adjust the interval for heart creation
});
