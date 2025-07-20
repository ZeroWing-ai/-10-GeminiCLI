document.addEventListener('DOMContentLoaded', () => {
    const passwordInput = document.getElementById('password-input');
    const strengthBar = document.getElementById('strength-bar');
    const strengthText = document.getElementById('strength-text');

    passwordInput.addEventListener('input', updateStrength);

    function updateStrength() {
        const password = passwordInput.value;
        let score = 0;

        // 長さ
        if (password.length >= 8) {
            score += 1;
        }
        if (password.length >= 12) {
            score += 1;
        }

        // 大文字、小文字、数字、記号の組み合わせ
        const hasLowercase = /[a-z]/.test(password);
        const hasUppercase = /[A-Z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password);

        if (hasLowercase) score += 1;
        if (hasUppercase) score += 1;
        if (hasNumber) score += 1;
        if (hasSymbol) score += 1;

        // 強度に応じた表示
        let strength = '';
        let barColor = '';
        let barWidth = 0;

        if (password.length === 0) {
            strength = '';
            barColor = '#eee';
            barWidth = 0;
        } else if (score <= 2) {
            strength = '弱い';
            barColor = 'red';
            barWidth = 25;
        }
        else if (score <= 4) {
            strength = '普通';
            barColor = 'orange';
            barWidth = 50;
        }
        else if (score <= 6) {
            strength = '強い';
            barColor = 'yellowgreen';
            barWidth = 75;
        }
        else {
            strength = '非常に強い';
            barColor = 'green';
            barWidth = 100;
        }

        strengthText.textContent = strength;
        strengthBar.style.width = `${barWidth}%`;
        strengthBar.style.backgroundColor = barColor;
    }

    // 初期状態を更新
    updateStrength();
});