document.addEventListener('DOMContentLoaded', () => {
    const diceDisplay = document.getElementById('dice-display');
    const rollButton = document.getElementById('roll-button');

    rollButton.addEventListener('click', rollDice);

    function rollDice() {
        const randomNumber = Math.floor(Math.random() * 6) + 1; // 1から6までの乱数を生成
        diceDisplay.textContent = randomNumber;
    }
});