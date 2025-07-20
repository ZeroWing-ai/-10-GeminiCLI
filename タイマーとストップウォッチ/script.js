document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.querySelector('.timer-display');
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const resetBtn = document.getElementById('reset');

    let startTime;
    let elapsedTime = 0;
    let timerInterval;

    function formatTime(ms) {
        const date = new Date(ms);
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        const seconds = String(date.getSeconds()).padStart(2, '0');
        return `${hours}:${minutes}:${seconds}`;
    }

    function startTimer() {
        startTime = Date.now() - elapsedTime;
        timerInterval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            timerDisplay.textContent = formatTime(elapsedTime);
        }, 10);

        startBtn.disabled = true;
        stopBtn.disabled = false;
    }

    function stopTimer() {
        clearInterval(timerInterval);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        elapsedTime = 0;
        timerDisplay.textContent = formatTime(0);
        startBtn.disabled = false;
        stopBtn.disabled = true;
    }

    startBtn.addEventListener('click', startTimer);
    stopBtn.addEventListener('click', stopTimer);
    resetBtn.addEventListener('click', resetTimer);

    stopBtn.disabled = true;
});