let currentIndex = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;
let isShowMobileMenu = false;

function updateSliderPosition() {
  const slideWidth = slider.parentElement.offsetWidth;
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

function nextSlide() {
  if (currentIndex < totalSlides - 1) {
    currentIndex++;
    updateSliderPosition();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
}

window.addEventListener("resize", updateSliderPosition);
window.addEventListener("load", updateSliderPosition);

function showMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const menuButton = document.getElementById("menu-button");

  isShowMobileMenu = !isShowMobileMenu;

  if (isShowMobileMenu) {
    menu.classList.remove("-translate-y-[400px]");
    menu.classList.add("translate-y-[0px]");
    menuButton.classList.remove("fa-solid", "fa-bars");
    menuButton.classList.add("fa-solid", "fa-xmark");
  } else {
    menu.classList.remove("translate-y-[0px]");
    menu.classList.add("-translate-y-[400px]");
    menuButton.classList.remove("fa-solid", "fa-xmark");
    menuButton.classList.add("fa-solid", "fa-bars");
  }
}
