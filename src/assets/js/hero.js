//////////////////////////////////////////
// HERO
import { gsap } from "gsap";

gsap.to("#hero-image", {
  duration: 1,
  //y: "-10rem",
  scale: 1,
  opacity: 1,
  filter: "blur(0px)",
  delay: 0.5,
});

gsap.to("#logo", {
  duration: 0.5,
  y: 0,
  opacity: 1,
  delay: 1.25,
  //ease: "in-out"
});
