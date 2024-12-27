function checkAnswers() {
    const answers = {
        question1: "1997",
        question2: "триллер",
        question3: "Дэвид Линч",
        question4: "Фредди",
        question5: "Лос-Анжелес",
        question6: "Потеря идентичности"
    };

    let score = 0;
    const form = document.getElementById('quizForm');
    
    // Проверка ответов
    for (let question in answers) {
        const userAnswer = form[question].value.trim();
        if (userAnswer.toLowerCase() === answers[question].toLowerCase()) {
            score++;
            document.getElementById(`result${question.charAt(question.length - 1)}`).textContent = "Правильно!";
        } else {
            document.getElementById(`result${question.charAt(question.length - 1)}`).textContent = "Неправильно!";
        }
    }

    // Отображение результата
    document.getElementById('score').textContent = `Ваш результат: ${score} из ${Object.keys(answers).length}`;
    
    // Сохранение результата последнего теста в localStorage
    localStorage.setItem('lastTestResult', `${score} из ${Object.keys(answers).length}`);
}

function loadLastTestResult() {
    // Здесь вы можете получить результат теста из базы данных или локального хранилища
    const lastResult = "0 из 3"; // Пример результата, замените на реальный
    document.getElementById('lastTestResult').textContent = lastResult; // Отображаем результат
}

document.addEventListener("DOMContentLoaded", function() {
    const username = localStorage.getItem('username'); // Получаем имя пользователя
    if (username) {
        document.getElementById('username').textContent = username; // Устанавливаем имя пользователя в заголовке
    } else {
        document.getElementById('username').textContent = "Гость"; // Если имя пользователя не найдено
    }
});

// Функция сброса теста
function resetQuiz() {
    const form = document.getElementById('quizForm');
    form.reset();
    document.getElementById('score').textContent = '';
    document.getElementById('lastTestResult').textContent = 'Здесь будет отображаться результат последнего теста.';
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`result${i}`).textContent = '';
    }
}

// Функция для загрузки результата последнего теста в профиль
function loadLastTestResult() {
    const lastResult = localStorage.getItem('lastTestResult') || "Результат не найден";
    document.getElementById('lastTestResult').textContent = lastResult; // Отображаем результат
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

// Функция для загрузки профиля пользователя
function displayProfile() {
    const username = localStorage.getItem('username');
    const dob = localStorage.getItem('dob');
    const gender = localStorage.getItem('gender');

    // Логирование значений из localStorage
    console.log("Stored Username:", username);
    console.log("Stored Date of Birth:", dob);
    console.log("Stored Gender:", gender);

    // Проверка и отображение данных
    if (username) {
        document.getElementById('profileUsername').textContent = username;
    } else {
        document.getElementById('profileUsername').textContent = "Имя пользователя не найдено";
    }
    if (dob) {
        document.getElementById('profileDob').textContent = dob;
    } else {
        document.getElementById('profileDob').textContent = "Дата рождения не найдена";
    }
    if (gender) {
        document.getElementById('profileGender').textContent = gender;
    } else {
        document.getElementById('profileGender').textContent = "Пол не найден";
    }

    // Загрузка результата последнего теста
    loadLastTestResult();
}

window.onload = function() {
    displayProfile();
};


