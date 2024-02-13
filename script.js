document.getElementById("bb").addEventListener("click", function() {
    this.style.opacity = "0"; // Змінюємо прозорість на нуль
    this.style.pointerEvents = "none"; // Вимикаємо можливість натискати кнопку
    setTimeout(() => {
        this.remove(); // Видаляємо кнопку з DOM через певний час
    }, 3000); // Час у мілісекундах перед видаленням кнопки (у цьому випадку 500 мс)
});
document.getElementById("nobb").addEventListener("click", function() {
    // Затримуємо перехід на інший сайт на 3 секунди (3000 мілісекунд)
    setTimeout(function() {
        // Перехід на інший сайт
        window.location.href = "second.html"; // Замініть URL на ваш
    }, 3000);
});
document.getElementById("b33").addEventListener("click", function() {
    var button = this;
    button.classList.add("jumping"); // Додаємо клас анімації стрибання після натискання на кнопку

   
});