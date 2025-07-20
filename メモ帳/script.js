document.addEventListener('DOMContentLoaded', () => {
    const noteArea = document.getElementById('note-area');
    const saveButton = document.getElementById('save-button');
    const clearButton = document.getElementById('clear-button');

    // 保存されたメモを読み込む
    const savedNote = localStorage.getItem('note');
    if (savedNote) {
        noteArea.value = savedNote;
    }

    saveButton.addEventListener('click', () => {
        localStorage.setItem('note', noteArea.value);
        alert('メモを保存しました。');
    });

    clearButton.addEventListener('click', () => {
        if (confirm('本当にメモをクリアしますか？')) {
            noteArea.value = '';
            localStorage.removeItem('note');
        }
    });
});