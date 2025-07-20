document.addEventListener('DOMContentLoaded', () => {
    const birthdateInput = document.getElementById('birthdate');
    const calculateButton = document.getElementById('calculate-age');
    const resultDiv = document.getElementById('result');

    calculateButton.addEventListener('click', calculateAge);

    function calculateAge() {
        const birthdate = new Date(birthdateInput.value);
        if (isNaN(birthdate.getTime())) {
            resultDiv.textContent = '有効な生年月日を入力してください。';
            resultDiv.style.color = 'red';
            return;
        }

        const today = new Date();
        let age = today.getFullYear() - birthdate.getFullYear();
        const monthDiff = today.getMonth() - birthdate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }

        resultDiv.textContent = `あなたの年齢は ${age} 歳です。`;
        resultDiv.style.color = 'green';
    }
});