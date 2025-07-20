document.addEventListener('DOMContentLoaded', () => {
    const timerDisplay = document.querySelector('.timer-display');
    const startBtn = document.getElementById('start-btn');
    const pauseBtn = document.getElementById('pause-btn');
    const resetBtn = document.getElementById('reset-btn');
    const pomodoroModeBtn = document.getElementById('pomodoro-mode');
    const shortBreakModeBtn = document.getElementById('short-break-mode');
    const longBreakModeBtn = document.getElementById('long-break-mode');

    let timerInterval;
    let timeLeft;
    let isRunning = false;
    let currentMode = 'pomodoro';

    const modes = {
        pomodoro: 25 * 60, // 25 minutes
        shortBreak: 5 * 60, // 5 minutes
        longBreak: 15 * 60 // 15 minutes
    };

    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    }

    function updateTimerDisplay() {
        timerDisplay.textContent = formatTime(timeLeft);
    }

    function startTimer() {
        if (isRunning) return;
        isRunning = true;
        timerInterval = setInterval(() => {
            timeLeft--;
            updateTimerDisplay();
            if (timeLeft <= 0) {
                clearInterval(timerInterval);
                isRunning = false;
                alert('時間です！');
            }
        }, 1000);
    }

    function pauseTimer() {
        clearInterval(timerInterval);
        isRunning = false;
    }

    function resetTimer() {
        clearInterval(timerInterval);
        isRunning = false;
        timeLeft = modes[currentMode];
        updateTimerDisplay();
    }

    function setMode(mode) {
        currentMode = mode;
        resetTimer();
    }

    startBtn.addEventListener('click', startTimer);
    pauseBtn.addEventListener('click', pauseTimer);
    resetBtn.addEventListener('click', resetTimer);
    pomodoroModeBtn.addEventListener('click', () => setMode('pomodoro'));
    shortBreakModeBtn.addEventListener('click', () => setMode('shortBreak'));
    longBreakModeBtn.addEventListener('click', () => setMode('longBreak'));

    // 初期設定
    timeLeft = modes.pomodoro;
    updateTimerDisplay();
});