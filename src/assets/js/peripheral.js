gsap.to(
    "header",
    {
      duration: 0.5,
      backgroundColor: "rgba(0,0,0,0.1)",
      backdropFilter: "blur(10px)",
      scrollTrigger: {
          trigger: "#hero-image",
          scrub: true,
          start: "center top", // "triggerElement page"
          end: "bottom top", // "triggerElement page"
      },
    }
  );