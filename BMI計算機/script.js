document.addEventListener('DOMContentLoaded', () => {
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const calculateBtn = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', calculateBMI);

    function calculateBMI() {
        const height = parseFloat(heightInput.value);
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDiv.textContent = '有効な身長と体重を入力してください。';
            resultDiv.style.color = 'red';
            return;
        }

        const bmi = weight / ((height / 100) * (height / 100));
        let category = '';
        let color = '';

        if (bmi < 18.5) {
            category = '低体重';
            color = 'orange';
        } else if (bmi >= 18.5 && bmi < 25) {
            category = '普通体重';
            color = 'green';
        } else if (bmi >= 25 && bmi < 30) {
            category = '肥満（1度）';
            color = 'orange';
        } else if (bmi >= 30 && bmi < 35) {
            category = '肥満（2度）';
            color = 'red';
        } else if (bmi >= 35 && bmi < 40) {
            category = '肥満（3度）';
            color = 'darkred';
        } else {
            category = '肥満（4度）';
            color = 'darkred';
        }

        resultDiv.textContent = `あなたのBMIは ${bmi.toFixed(2)} です (${category})`;
        resultDiv.style.color = color;
    }
});