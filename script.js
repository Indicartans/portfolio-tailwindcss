let currentIndex = 0;
const slider = document.getElementById("slider");
const totalSlides = slider.children.length;

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
