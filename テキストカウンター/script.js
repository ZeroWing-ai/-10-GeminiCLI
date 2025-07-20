document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
    const wordCount = document.getElementById('word-count');

    textInput.addEventListener('input', updateCounts);

    function updateCounts() {
        const text = textInput.value;

        // 文字数
        charCount.textContent = text.length;

        // 単語数
        const words = text.trim().split(/\s+/).filter(word => word.length > 0);
        wordCount.textContent = words.length;
    }
});