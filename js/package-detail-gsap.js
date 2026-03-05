gsap.timeline()

.from("#packageDetail", {
  x: -80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
})

.from("#packageImage", {
  x: 80,
  opacity: 0,
  duration: 1,
  ease: "power3.out"
}, "-=0.6");