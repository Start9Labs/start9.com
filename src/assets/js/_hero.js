//////////////////////////////////////////
// HERO

gsap.from("#hero-image", {
    duration: 1,
    //y: "-10rem",
    scale: 0.95,
    opacity: 0,
    filter: "blur(10px)",
    delay: 0.5,
  });
  gsap.from("#logo", {
    duration: 0.5,
    y: "-5rem",
    opacity: 0,
    delay: 1.25,
    //ease: "in-out"
  });