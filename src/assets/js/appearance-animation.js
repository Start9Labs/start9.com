/************************************************/
/* SECTION, LINE, AND TEXT APPEARANCE ANIMATION */
/************************************************/

//////////////////////////////////////////
// HERO

const defaultActions = "play none none none";

// line animation
gsap.from("#hero-to-pitch path:first-child", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero-to-pitch",
    scrub: true,
    start: "top 90%", // "triggerElement page"
    end: "bottom 50%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

//////////////////////////////////////////
// PITCH

// object animation
gsap.from("#pitch h1, #pitch p", {
  duration: 0.5,
  y: "5rem",
  scale: 0.9,
  opacity: 0,
  scrollTrigger: {
    trigger: "#pitch",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

//////////////////////////////////////////
// PRODUCTS

// object animation
gsap.from("#products .subsection--buy", {
  duration: 0.5,
  opacity: 0,
  outline: "1px solid rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: "#products",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// object animation
gsap.from("#products .subsection--diy", {
  duration: 0.5,
  delay: 0.25,
  opacity: 0,
  outline: "1px solid rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: ".subsection--diy",
    start: "top 85%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

const buyAnchor = document.querySelector(".product--buy");

const buyTL = gsap
  .timeline({ paused: true })
  .from(
    "#buy-real-lines path:first-child",
    { drawSVG: 0, ease: "none", duration: 0.75 },
    0
  )
  .to(
    ".product__buy-image",
    {
      //opacity: 0.5,
      ease: "none",
      duration: 0.25,
      filter: "drop-shadow(0 0 2rem rgba(255,255,255,.2))",
    },
    0
  );

buyAnchor.onmouseenter = () => buyTL.play();
buyAnchor.onmouseleave = () => buyTL.reverse();

// line animation
gsap.from("#products-to-info path:first-child", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#products-to-info path:first-child",
    scrub: true,
    start: "top 75%", // "triggerElement page"
    end: "bottom 75%", // "triggerElement page"
  },
});

//////////////////////////////////////////
// INFOGRAPHICS

if (document.querySelector("#infographics .subsection--control")) {
  // object animation
  gsap.from("#infographics .subsection--trust", {
    duration: 0.5,
    opacity: 0,
    outline: "1px solid rgba(255,255,255,1)",
    scrollTrigger: {
      trigger: "#infographics .subsection--trust",
      start: "top 75%", // "triggerElement page"
      toggleActions: defaultActions,
    },
  });

  // object animation
  gsap.from("#infographics .subsection--control", {
    duration: 0.5,
    opacity: 0,
    outline: "1px solid rgba(255,255,255,1)",
    scrollTrigger: {
      trigger: "#infographics .subsection--control",
      start: "top 75%", // "triggerElement page"
      toggleActions: defaultActions,
    },
  });
}

//////////////////////////////////////////
// BITCOIN

// object animation
gsap.from("#bitcoin .subsection--bitcoin", {
  duration: 1,
  opacity: 0,
  filter: "blur(10px)",
  y: "5rem",
  scrollTrigger: {
    trigger: "#bitcoin .subsection--bitcoin",
    start: "top bottom", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// object animation
gsap.from("#bitcoin .subsection--lightning", {
  duration: 1,
  opacity: 0,
  filter: "blur(10px)",
  y: "-5rem",
  scrollTrigger: {
    trigger: "#bitcoin .subsection--lightning",
    start: "top bottom", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// line animation
gsap.from("#bitcoin-to-be path:first-child", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#bitcoin-to-be",
    scrub: true,
    start: "top 75%",
    end: "bottom 75%",
  },
});

//////////////////////////////////////////
// BE YOUR OWN

// object animation
gsap.from("#be-your-own h1", {
  duration: 0.5,
  y: "5rem",
  opacity: 0,
  scrollTrigger: {
    trigger: "#be-your-own",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// object animation
gsap.from("#be-your-own p", {
  duration: 0.5,
  y: "5rem",
  filter: "blur(10px)",
  opacity: 0,
  scrollTrigger: {
    trigger: "#be-your-own h1",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// object animation
gsap.from("#be-your-own #ticker", {
  duration: 1.5,
  filter: "blur(20px)",
  opacity: 0,
  scrollTrigger: {
    trigger: "#be-your-own #ticker",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// line animation
gsap.from("#be-to-powered path", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#be-to-powered path",
    scrub: true,
    start: "top 75%",
    end: "bottom 75%",
  },
});

//////////////////////////////////////////
// POWERED

if (document.querySelector("#powered-by") && document.querySelector("#powered-by svg")) {
  gsap.from("#powered-by h1", {
    duration: 0.5,
    y: "-5rem",
    opacity: 0,
    scrollTrigger: {
      trigger: "#powered-by h1",
      start: "top 75%", // "triggerElement page"
      toggleActions: defaultActions,
    },
  });
  
  // object animation
  gsap.from("#powered-by p", {
    duration: 0.5,
    filter: "blur(10px)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#powered-by h1",
      start: "top 75%", // "triggerElement page"
      toggleActions: defaultActions,
    },
  });

  // object animation
  gsap.from("#powered-by svg", {
    duration: 1,
    filter: "blur(20px)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#powered-by svg",
      start: "top 75%", // "triggerElement page"
      toggleActions: defaultActions,
    },
  });
  
  // line animation
  gsap.from("#powered-to-support path", {
    drawSVG: 0,
    ease: "none",
    scrollTrigger: {
      trigger: "#powered-to-support path",
      scrub: true,
      start: "top 75%",
      end: "bottom 75%",
    },
  });
}


//////////////////////////////////////////
// SUPPORT

// object animation
gsap.from("#support", {
  duration: 0.5,
  opacity: 0,
  outline: "1px solid rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: "#support",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// line animation
gsap.from("#support-to-dev path", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#support-to-dev path",
    scrub: true,
    start: "top 75%",
    end: "bottom 75%",
  },
});

//////////////////////////////////////////
// DEV

// object animation
gsap.from("#dev h1", {
  duration: 0.5,
  scale: 0.8,
  opacity: 0,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#dev",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// object animation
gsap.from("#dev .col:nth-child(1)", {
  duration: 0.5,
  x: "5rem",
  opacity: 0,
  delay: 0.5,
  outline: "1px solid rgba(255,255,255,1)",
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#dev",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// object animation
gsap.from("#dev .col:nth-child(2)", {
  duration: 0.5,
  x: "-5rem",
  scale: 0.5,
  opacity: 0,
  delay: 0.75,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#dev",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

// line animation
gsap.from("#dev-to-contact path", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#dev-to-contact path",
    scrub: true,
    start: "top 75%",
    end: "bottom 75%",
  },
});

//////////////////////////////////////////
// CONTACT

// object animation
gsap.from("#community", {
  duration: 0.5,
  scale: 0.8,
  opacity: 0,
  //outline: "1px solid rgba(255,255,255,1)",
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#community",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});
