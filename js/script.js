function checkAnswers() {
    const answers = {
        question1: "1997",
        question2: "триллер",
        question3: "Дэвид Линч"
    };

    let score = 0;
    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]`).value;
        const resultSpan = document.getElementById(`result${question.charAt(question.length - 1)}`);
        if (userAnswer.toLowerCase() === answers[question].toLowerCase()) {
            score++;
            resultSpan.textContent = "Ответ правильный!";
            resultSpan.style.color = "green";
        } else {
            resultSpan.textContent = `Ответ неправильный, правильный ответ: ${answers[question]}`;
            resultSpan.style.color = "red";
        }
    }
    document.getElementById("score").textContent = `Ваш результат: ${score} из ${Object.keys(answers).length}`;

    // Сохранение результата в localStorage
    localStorage.setItem('lastTestScore', score);
}

function loadResults() {
    const lastScore = localStorage.getItem('lastTestScore');
    if (lastScore !== null) {
        alert(`Ваш последний результат: ${lastScore}`);
        document.getElementById("score").textContent = `Ваш последний результат: ${lastScore}`;
    } else {
        alert("Результаты теста не найдены.");
        document.getElementById("score").textContent = "Результаты теста не найдены.";
    }
}

// Функция сброса теста
function resetQuiz() {
    // Сбрасываем форму
    document.getElementById("quizForm").reset();
    
    // Очищаем результаты
    document.getElementById("score").textContent = "";
    const results = document.querySelectorAll(".result");
    results.forEach(result => result.textContent = "");
    
    // Удаляем сохраненный результат из localStorage
    localStorage.removeItem('lastTestScore');
}

// Функция выхода из системы
function logout() {
    if (confirm("Вы уверены, что хотите выйти?")) {
        // Очистка данных пользователя при выходе
        localStorage.clear(); 
        alert("Вы вышли из системы.");
        window.location.href = "index.html"; // Перенаправление на страницу входа
    }
}

function loadProfile() {
    const username = document.getElementById('username').value;
    const dob = document.getElementById('dob').value;
    const gender = document.getElementById('gender').value;

    // Логирование значений
    console.log("Username:", username);
    console.log("Date of Birth:", dob);
    console.log("Gender:", gender);

    // Сохранение данных в localStorage
    localStorage.setItem('username', username);
    localStorage.setItem('dob', dob);
    localStorage.setItem('gender', gender);

    // Перенаправление на страницу профиля после сохранения данных
    window.location.href = "profile.htm"; // Убедитесь, что у вас есть страница profile.htm
    return false; // Предотвращаем отправку формы
}

// Функция для загрузки профиля пользователя
function displayProfile() {
    const username = localStorage.getItem('username');
    const dob = localStorage.getItem('dob');
    const gender = localStorage.getItem('gender');

    // Логирование значений из localStorage
    console.log("Stored Username:", username);
    console.log("Stored Date of Birth:", dob);
    console.log("Stored Gender:", gender);

    if (username) {
        document.getElementById('profileUsername').textContent = username;
    } else {
        console.log("Username not found in localStorage");
    }
    if (dob) {
        document.getElementById('profileDob').textContent = dob;
    } else {
        console.log("Date of Birth not found in localStorage");
    }
    if (gender) {
        document.getElementById('profileGender').textContent = gender;
    } else {
        console.log("Gender not found in localStorage");
    }
}

window.onload = function() {
    displayProfile();
};