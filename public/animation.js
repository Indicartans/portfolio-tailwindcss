import {
  animate,
  scroll,
  inView,
  easeOut,
} from "https://cdn.jsdelivr.net/npm/motion@latest/+esm";

// hero section
inView("#introduction h1", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [-50, 0] },
    { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

inView("#introduction p", (element) => {
  animate(
    element,
    { opacity: [0, 1], x: [50, 0] },
    { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

inView("#introduction div", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [50, 0] },
    { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

inView(".hero-image", (element) => {
  animate(element, { opacity: [0, 1], y: [50, 0] }, { duration: 0.9 });
});

inView(".decoration-icon", (element) => {
  animate(element, { opacity: [0, 1] }, { duration: 2 });
});

// terminal
new TypeIt("#terminal", {
  speed: 50,
  startDelay: 900,
})
  .type('> introdction.<span class= "text-lime-200">run()')
  .pause(900)
  .move(-11)
  .type("u")
  .pause(500)
  .move(11, { instant: true })
  .type("<br>")
  .type(
    '<span class="text-green-500">[INFO]</span> Hello World, i am Alfa Indica, a web developer'
  )
  .type("<br>")
  .type(
    '<span class="text-yellow-500">[WARNING]</span> Burnout detected, coding for too long without a break'
  )
  .type("<br>")
  .type(
    '<span class="text-red-500">[ERROR]</span> Application crashed, opening fesnuk for no reason...'
  )
  .go();

//   aboout section
inView(".title", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [-30, 0] },
    { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

inView(".description-1", (element) => {
  animate(
    element,
    { opacity: [0, 1], x: [50, 0] },
    { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

inView(".description-2", (element) => {
  animate(
    element,
    { opacity: [0, 1], x: [-50, 0] },
    { duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
  );
});

// skills
inView(".skills", (element) => {
  animate(element, { scale: [0, 1] }, { duration: 0.9 });

  element.addEventListener("mouseenter", () => {
    animate(element, { scale: 1.1 }, { duration: 0.3 });
  });

  element.addEventListener("mouseleave", () => {
    animate(element, { scale: 1 }, { duration: 0.1 });
  });
});

// experiences
inView(".experiences-card", (element) => {
  if (element.id == "card1") {
    animate(element, { opacity: [0, 1], x: [50, 0] }, { duration: 0.9 });
  } else {
    animate(element, { opacity: [0, 1], x: [-50, 0] }, { duration: 0.9 });
  }
});

// project
inView(".card-project", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [50, 0] },
    { duration: 0.9, easing: easeOut }
  );
});

// certification
inView(".certification", (element) => {
  animate(
    element,
    { opacity: [0, 1], y: [50, 0] },
    { duration: 0.9, easing: easeOut }
  );
});

// closing
inView(".closing", (element) => {
  animate(element, { opacity: [0, 1], y: [50, 0] }, { duration: 0.9 });
});

// footer
inView(".footer", (element) => {
  animate(
    element,
    {opacity: [0,1], y:[50,0]},
    {duration: 0.9, easing: easeOut}
  )
})
