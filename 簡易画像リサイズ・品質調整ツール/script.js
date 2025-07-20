document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('image-input');
    const widthInput = document.getElementById('width-input');
    const heightInput = document.getElementById('height-input');
    const qualityInput = document.getElementById('quality-input');
    const processBtn = document.getElementById('process-btn');
    const canvas = document.getElementById('image-canvas');
    const ctx = canvas.getContext('2d');
    const downloadLink = document.getElementById('download-link');

    let originalImage = null;

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const img = new Image();
            img.onload = () => {
                originalImage = img;
                widthInput.value = img.width;
                heightInput.value = img.height;
                drawOriginalImage();
            };
            img.src = event.target.result;
        };
        reader.readAsDataURL(file);
    });

    processBtn.addEventListener('click', processImage);

    function drawOriginalImage() {
        if (originalImage) {
            canvas.width = originalImage.width;
            canvas.height = originalImage.height;
            ctx.drawImage(originalImage, 0, 0);
            downloadLink.style.display = 'none';
        }
    }

    function processImage() {
        if (!originalImage) {
            alert('画像を読み込んでください。');
            return;
        }

        const targetWidth = parseInt(widthInput.value);
        const targetHeight = parseInt(heightInput.value);
        const quality = parseFloat(qualityInput.value);

        if (isNaN(targetWidth) || isNaN(targetHeight) || targetWidth <= 0 || targetHeight <= 0) {
            alert('有効な幅と高さを入力してください。');
            return;
        }
        if (isNaN(quality) || quality < 0.1 || quality > 1.0) {
            alert('品質は0.1から1.0の間で入力してください。');
            return;
        }

        canvas.width = targetWidth;
        canvas.height = targetHeight;
        ctx.drawImage(originalImage, 0, 0, targetWidth, targetHeight);

        const dataURL = canvas.toDataURL('image/jpeg', quality);
        downloadLink.href = dataURL;
        downloadLink.style.display = 'block';
    }
});