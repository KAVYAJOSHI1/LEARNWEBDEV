// Add event listeners to buttons for redirecting to the corresponding game pages
document.querySelectorAll('.game-button').forEach(button => {
    button.addEventListener('click', function() {
        const game = this.getAttribute('data-game');
        window.location.href = game;
    });
});
