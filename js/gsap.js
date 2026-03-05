gsap.registerPlugin(ScrollTrigger);

/* ================= HERO ANIMATION ================= */

const heroTl = gsap.timeline();

heroTl
  .from(".labx-sub-heading", {
    y: 40,
    opacity: 0,
    duration: 0.8
  })
  .from(".labx-content h1", {
    y: 60,
    opacity: 0,
    duration: 0.8
  }, "-=0.4")
  .from(".labx-content p", {
    y: 40,
    opacity: 0,
    duration: 0.8
  }, "-=0.4")
  .from(".labx-cta-btn", {
    scale: 0.9,
    opacity: 0,
    duration: 0.6
  }, "-=0.4")
  .from(".labx-slider img", {
    x: 80,
    opacity: 0,
    duration: 1
  }, "-=0.6");


/* ================= ABOUT SECTION ================= */

gsap.from(".about-img", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%"
  },
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".about-content", {
  scrollTrigger: {
    trigger: ".about-section",
    start: "top 75%"
  },
  x: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});


/* ================= PACKAGE SECTION ================= */

gsap.from(".packages-head", {
  scrollTrigger: {
    trigger: ".pacages-body-chackUp",
    start: "top 80%"
  },
  y: 40,
  opacity: 0,
  duration: 0.8,
  ease: "power2.out"
});

gsap.utils.toArray(".package-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%"
    },
    y: 60,
    opacity: 0,
    duration: 0.8,
    delay: i * 0.05,
    ease: "power3.out"
  });
});


/* ================= CONTACT SECTION ================= */

gsap.from(".contact-image", {
  scrollTrigger: {
    trigger: ".contact-modern",
    start: "top 75%"
  },
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".contact-form", {
  scrollTrigger: {
    trigger: ".contact-modern",
    start: "top 75%"
  },
  x: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
});

gsap.from(".info-card", {
  scrollTrigger: {
    trigger: ".contact-info-cards",
    start: "top 85%"
  },
  y: 50,
  opacity: 0,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out"
});


/* ================= SAFETY REFRESH ================= */

window.addEventListener("load", () => {
  ScrollTrigger.refresh();
});