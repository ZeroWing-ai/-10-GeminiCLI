document.addEventListener('DOMContentLoaded', () => {
    function updateClocks() {
        const options = {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: false
        };

        // 東京 (Asia/Tokyo)
        const tokyoTime = new Date().toLocaleTimeString('ja-JP', { timeZone: 'Asia/Tokyo', ...options });
        document.getElementById('tokyo-time').textContent = tokyoTime;

        // ロンドン (Europe/London)
        const londonTime = new Date().toLocaleTimeString('en-GB', { timeZone: 'Europe/London', ...options });
        document.getElementById('london-time').textContent = londonTime;

        // ニューヨーク (America/New_York)
        const newyorkTime = new Date().toLocaleTimeString('en-US', { timeZone: 'America/New_York', ...options });
        document.getElementById('newyork-time').textContent = newyorkTime;
    }

    // 1秒ごとに時計を更新
    setInterval(updateClocks, 1000);

    // 初回表示
    updateClocks();
});