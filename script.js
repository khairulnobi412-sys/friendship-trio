// ==========================================
// FRIENDSHIP TRIO — PREMIUM SLIDE CONTROLLER
// Fafa • Khai • Bappy
// ==========================================

document.addEventListener("DOMContentLoaded", () => {
  // Remove old loading screen
  const loader = document.getElementById("loader");

  if (loader) {
    setTimeout(() => {
      loader.style.opacity = "0";
      loader.style.pointerEvents = "none";

      setTimeout(() => {
        loader.remove();
      }, 500);

    }, 700);
  }
  const shell = document.getElementById("cuteSlideShell");
  const slides = shell
    ? [...shell.querySelectorAll(".cute-slide")]
    : [];

  const navButtons = [
    ...document.querySelectorAll("#cuteSlideNav button")
  ];

  const progress = document.querySelector(
    "#cuteSlideProgress span"
  );

  const counter = document.getElementById("cuteSlideCounter");

  let current = 0;
  let animating = false;

  // ------------------------------------------
  // SHOW SLIDE
  // ------------------------------------------

  function showSlide(index) {

    if (!slides.length) return;

    if (
      animating ||
      index < 0 ||
      index >= slides.length ||
      index === current
    ) {
      return;
    }

    animating = true;

    const oldSlide = slides[current];
    const newSlide = slides[index];

    oldSlide.classList.remove("is-active");

    newSlide.classList.add("is-active");

    current = index;

    // Counter
    if (counter) {
      counter.textContent =
        String(current + 1).padStart(2, "0") +
        " / " +
        String(slides.length).padStart(2, "0");
    }

    // Progress bar
    if (progress) {
      progress.style.width =
        ((current + 1) / slides.length * 100) + "%";
    }

    // Navigation buttons
    navButtons.forEach((button, i) => {
      button.classList.toggle(
        "active",
        i === current
      );
    });

    setTimeout(() => {
      animating = false;
    }, 650);
  }

  // ------------------------------------------
  // NEXT / PREVIOUS
  // ------------------------------------------

  function nextSlide() {
    if (current < slides.length - 1) {
      showSlide(current + 1);
    }
  }

  function previousSlide() {
    if (current > 0) {
      showSlide(current - 1);
    }
  }

  // ------------------------------------------
  // NAVIGATION BUTTONS
  // ------------------------------------------

  navButtons.forEach((button, index) => {

    button.addEventListener("click", () => {
      showSlide(index);
    });

  });

  // ------------------------------------------
  // OPEN STORY BUTTON
  // ------------------------------------------

  document
    .querySelectorAll("[data-next-slide]")
    .forEach(button => {

      button.addEventListener("click", nextSlide);

    });

  // ------------------------------------------
  // REPLAY BUTTON
  // ------------------------------------------

  document
    .querySelectorAll("[data-replay]")
    .forEach(button => {

      button.addEventListener("click", () => {

        if (current === 0) return;

        slides[current].classList.remove("is-active");

        current = 0;

        slides[0].classList.add("is-active");

        updateUI();

      });

    });

  // ------------------------------------------
  // UPDATE UI
  // ------------------------------------------

  function updateUI() {

    if (counter) {

      counter.textContent =
        String(current + 1).padStart(2, "0") +
        " / " +
        String(slides.length).padStart(2, "0");

    }

    if (progress) {

      progress.style.width =
        ((current + 1) / slides.length * 100) + "%";

    }

    navButtons.forEach((button, index) => {

      button.classList.toggle(
        "active",
        index === current
      );

    });

  }

  // ------------------------------------------
  // KEYBOARD CONTROL
  // ------------------------------------------

  window.addEventListener("keydown", event => {

    if (
      event.key === "ArrowRight" ||
      event.key === " " ||
      event.key === "PageDown"
    ) {

      event.preventDefault();
      nextSlide();

    }

    if (
      event.key === "ArrowLeft" ||
      event.key === "PageUp"
    ) {

      event.preventDefault();
      previousSlide();

    }

    // Home
    if (event.key === "Home") {

      slides[current]?.classList.remove("is-active");

      current = 0;

      slides[0]?.classList.add("is-active");

      updateUI();

    }

    // End
    if (event.key === "End") {

      slides[current]?.classList.remove("is-active");

      current = slides.length - 1;

      slides[current]?.classList.add("is-active");

      updateUI();

    }

    // Number keys 1–7
    if (/^[1-7]$/.test(event.key)) {

      const number = Number(event.key) - 1;

      if (number < slides.length) {
        showSlide(number);
      }

    }

  });

  // ------------------------------------------
  // MOBILE SWIPE
  // ------------------------------------------

  let touchStartX = 0;

  window.addEventListener(
    "touchstart",
    event => {

      touchStartX =
        event.changedTouches[0].screenX;

    },
    { passive: true }
  );

  window.addEventListener(
    "touchend",
    event => {

      const touchEndX =
        event.changedTouches[0].screenX;

      const difference =
        touchEndX - touchStartX;

      if (Math.abs(difference) < 50) return;

      if (difference < 0) {
        nextSlide();
      } else {
        previousSlide();
      }

    },
    { passive: true }
  );

  // ------------------------------------------
  // INITIALIZE
  // ------------------------------------------

  if (slides.length) {

    slides.forEach(slide => {
      slide.classList.remove("is-active");
    });

    slides[0].classList.add("is-active");

    current = 0;

    updateUI();

  }

});
