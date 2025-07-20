document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('drawing-board');
    const ctx = canvas.getContext('2d');
    const colorPicker = document.getElementById('color-picker');
    const lineWidthInput = document.getElementById('line-width');
    const clearButton = document.getElementById('clear-button');

    canvas.width = 500;
    canvas.height = 400;

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    ctx.strokeStyle = colorPicker.value;
    ctx.lineWidth = lineWidthInput.value;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    function draw(e) {
        if (!isDrawing) return;
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(e.offsetX, e.offsetY);
        ctx.stroke();
        [lastX, lastY] = [e.offsetX, e.offsetY];
    }

    canvas.addEventListener('mousedown', (e) => {
        isDrawing = true;
        [lastX, lastY] = [e.offsetX, e.offsetY];
    });

    canvas.addEventListener('mousemove', draw);
    canvas.addEventListener('mouseup', () => isDrawing = false);
    canvas.addEventListener('mouseout', () => isDrawing = false);

    colorPicker.addEventListener('change', (e) => {
        ctx.strokeStyle = e.target.value;
    });

    lineWidthInput.addEventListener('change', (e) => {
        ctx.lineWidth = e.target.value;
    });

    clearButton.addEventListener('click', () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });
});