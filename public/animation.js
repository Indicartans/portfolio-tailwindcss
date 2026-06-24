import {
  animate,
  scroll,
  inView,
  stagger,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// iOS-like spring easing
const iosEase = [0.25, 0.46, 0.45, 0.94];
const springEase = [0.34, 1.56, 0.64, 1];

// hero section
inView("#introduction h1", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [-30, 0] },
    { duration: 1, easing: iosEase }
  );
});

inView("#introduction p", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [20, 0] },
    { duration: 1, easing: iosEase, delay: 0.2 }
  );
});

inView("#introduction div", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [20, 0] },
    { duration: 1, easing: iosEase, delay: 0.4 }
  );
});

inView(".hero-image", (element) => {
  animate(element, { opacity: [0, 1], y: [40, 0] }, { duration: 1.2, easing: iosEase });
});

inView(".decoration-icon", (element) => {
  animate(element, { opacity: [0, 0.8] }, { duration: 2, easing: iosEase });
});

// terminal
new TypeIt("#terminal", {
  speed: 50,
  startDelay: 900,
})
  .type('> introdction.<span class= "text-cyan-400">run()')
  .pause(900)
  .move(-11)
  .type("u")
  .pause(500)
  .move(11, { instant: true })
  .type("<br>")
  .type(
    '<span class="text-green-400">[INFO]</span> Hello World, i am Alfa Indica, a web developer'
  )
  .type("<br>")
  .type(
    '<span class="text-yellow-400">[WARNING]</span> Burnout detected, coding for too long without a break'
  )
  .type("<br>")
  .type(
    '<span class="text-red-400">[ERROR]</span> Application crashed, opening fesnuk for no reason...'
  )
  .go();

// about section - title
inView(".title", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [-20, 0] },
    { duration: 0.8, easing: iosEase }
  );
});

// section divider
inView(".section-divider", (element) => {
  animate(
    element,
    { opacity: [0, 1], scaleX: [0, 1] },
    { duration: 0.6, easing: iosEase }
  );
});

inView(".description-1", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.8, easing: iosEase }
  );
});

inView(".description-2", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.8, easing: iosEase, delay: 0.15 }
  );
});

// skills — stagger entrance
inView(".skills", (element) => {
  animate(
    element,
    { scale: [0, 1], opacity: [0, 1] },
    { duration: 0.6, easing: springEase }
  );

  element.addEventListener("mouseenter", () => {
    animate(element, { scale: 1.08 }, { duration: 0.3, easing: springEase });
  });

  element.addEventListener("mouseleave", () => {
    animate(element, { scale: 1 }, { duration: 0.2, easing: iosEase });
  });
});

// category pills
inView(".category-pill", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [10, 0] },
    { duration: 0.5, easing: iosEase }
  );
});

// experiences
inView(".experiences-card", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [40, 0] },
    { duration: 0.8, easing: iosEase }
  );
});

// timeline dots
inView(".timeline-dot", (element) => {
  animate(
    element,
    { scale: [0, 1], opacity: [0, 1] },
    { duration: 0.5, easing: springEase }
  );
});

// project
inView(".card-project", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [40, 0] },
    { duration: 0.8, easing: iosEase }
  );
});

// certification
inView(".certification", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [40, 0] },
    { duration: 0.8, easing: iosEase }
  );
});

// closing
inView(".closing", (element) => {
  animate(element, { opacity: [0, 1], y: [30, 0] }, { duration: 0.8, easing: iosEase });
});

// glass-card entrance
inView(".glass-card", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.8, easing: iosEase }
  );
});

// fun fact pills
inView(".pill", (element) => {
  animate(
    element,
    { opacity: [0, 1], scale: [0.8, 1] },
    { duration: 0.5, easing: springEase }
  );
});

// footer
inView(".footer", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [30, 0] },
    { duration: 0.8, easing: iosEase }
  );
});

// social icons
inView(".social-glass", (element) => {
  animate(
    element,
    { opacity: [0, 1], scale: [0.8, 1] },
    { duration: 0.5, easing: springEase }
  );
});

// Parallax blobs on scroll
scroll((progress, { y }) => {
  const blobs = document.querySelectorAll(".blob");
  blobs.forEach((blob, index) => {
    const speed = (index + 1) * 0.03;
    blob.style.transform = `translateY(${y.current * speed}px)`;
  });
});
