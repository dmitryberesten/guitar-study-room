/**
 * Guitar Study Room — Головний файл скриптів
 * Викладач: Дмитро Берестень
 */

document.addEventListener("DOMContentLoaded", () => {
  // -------------------------------------------------------------
  // 1. Інтерактивний FAQ (Акордеон)
  // -------------------------------------------------------------
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const questionBtn = item.querySelector(".faq-question");

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      // Закриваємо інші відкриті питання
      faqItems.forEach((otherItem) => {
        otherItem.classList.remove("active");
      });

      // Перемикаємо стан поточного питання
      if (!isActive) {
        item.classList.add("active");
      }
    });
  });

  // -------------------------------------------------------------
  // 2. Мобільне меню (Бургер)
  // -------------------------------------------------------------
  const burgerBtn = document.getElementById("burgerBtn");
  const navLinks = document.getElementById("navLinks");

  if (burgerBtn && navLinks) {
    // Відкриття/закриття меню при кліку на бургер
    burgerBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
    });

    // Автоматичне закриття меню при натисканні на будь-яке посилання
    const navAnchors = navLinks.querySelectorAll("a");
    navAnchors.forEach((anchor) => {
      anchor.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  }
});
