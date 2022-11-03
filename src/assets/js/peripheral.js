import { gsap } from "gsap";

const defaultActions = "play none none none";

gsap.from("section#hero+section", {
  duration: 0.5,
  y: "5rem",
  opacity: 0,
  delay: 1,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "section#hero+section",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

const sections = document.querySelectorAll("section:not(#hero):not(#blurb):not(#menu)");

sections.forEach(function (section) {
  gsap.from(section, {
    duration: 0.5,
    y: "5rem",
    opacity: 0,
    filter: "blur(10px)",
    scrollTrigger: {
      trigger: section,
      start: "top 75%", // "triggerElement page"
      toggleActions: defaultActions,
    },
  });
});
