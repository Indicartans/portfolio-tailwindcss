const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("text-gray-300", "font-semibold");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("text-gray-300", "font-semibold");
    }
  });
});

let isShowMobileMenu = false;

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

// panggil modal ke index
// asta-parking modal
fetch("modal/asta-parking-modal.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("astaParkingModal").innerHTML = html;
  });

// sipenting modal
fetch("modal/sipenting-modal.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("sipentingModal").innerHTML = html;
  });

// pemapistock modal
fetch("modal/pemapistock-modal.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("pemapistockModal").innerHTML = html;
  });

function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = document.getElementById(`${modalId}Content`);

  modal.classList.remove("opacity-0", "pointer-events-none");
  modal.classList.add("opacity-100");

  // Reset animasi skala dulu
  content.classList.remove("scale-100");
  content.classList.add("scale-95");

  // Jalankan animasi di frame selanjutnya
  requestAnimationFrame(() => {
    content.classList.remove("scale-95");
    content.classList.add("scale-100");
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = document.getElementById(`${modalId}Content`);

  // Jalankan animasi keluar
  content.classList.remove("scale-100");
  content.classList.add("scale-95");

  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0", "pointer-events-none");
}
