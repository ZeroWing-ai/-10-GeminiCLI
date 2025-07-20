document.addEventListener('DOMContentLoaded', () => {
    const colorPicker = document.getElementById('colorPicker');
    const hexCode = document.getElementById('hex-code');
    const rgbCode = document.getElementById('rgb-code');

    colorPicker.addEventListener('input', updateColor);

    function updateColor() {
        const color = colorPicker.value;
        hexCode.textContent = color;

        const rgb = hexToRgb(color);
        rgbCode.textContent = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})`;
        
        document.body.style.backgroundColor = color;
    }

    function hexToRgb(hex) {
        const bigint = parseInt(hex.substring(1), 16);
        const r = (bigint >> 16) & 255;
        const g = (bigint >> 8) & 255;
        const b = bigint & 255;
        return { r, g, b };
    }

    // 初期色の背景を設定
    updateColor();
});