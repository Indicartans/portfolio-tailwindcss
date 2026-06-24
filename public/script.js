const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const navbar = document.getElementById("navbar");
const backToTop = document.getElementById("backToTop");

// Active nav link on scroll + navbar glass effect + back to top
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
    link.classList.remove("active");

    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });

  // Navbar glass intensify on scroll
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }

  // Back to top button
  if (backToTop) {
    if (window.scrollY > 500) {
      backToTop.classList.add("visible");
    } else {
      backToTop.classList.remove("visible");
    }
  }
});

// Mobile menu
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

// Close mobile menu on link click
document.querySelectorAll("#mobile-menu .nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    if (isShowMobileMenu) {
      showMobileMenu();
    }
  });
});

// Load modals
fetch("modal/asta-parking-modal.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("astaParkingModal").innerHTML = html;
  });

fetch("modal/sipenting-modal.html")
  .then((response) => response.text())
  .then((html) => {
    document.getElementById("sipentingModal").innerHTML = html;
  });

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

  // Reset animation
  content.classList.remove("scale-100");
  content.classList.add("scale-95");

  requestAnimationFrame(() => {
    content.classList.remove("scale-95");
    content.classList.add("scale-100");
  });
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const content = document.getElementById(`${modalId}Content`);

  content.classList.remove("scale-100");
  content.classList.add("scale-95");

  modal.classList.remove("opacity-100");
  modal.classList.add("opacity-0", "pointer-events-none");
}

// Close modal on backdrop click
["astaParkingModal", "sipentingModal", "pemapistockModal"].forEach((modalId) => {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        closeModal(modalId);
      }
    });
  }
});
