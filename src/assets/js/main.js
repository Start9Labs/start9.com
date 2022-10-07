var bodyRect = document.body.getBoundingClientRect();

// TODO: pull these from data js
const sections = [
  "pitch",
  "products",
  "infographics",
  "bitcoin",
  "be-your-own",
  "powered-by",
  "support",
  "dev",
  "community",
];

const bitcoinServices = [
  "balanceofsatoshis",
  "bitcoind",
  "btc-rpc-proxy",
  "btcpayserver",
  "c-lightning",
  "electrs",
  "lightning-jet",
  "lnd",
  "lightning-terminal",
  "lndg",
  "mempool",
  "ride-the-lightning",
  "spark-wallet",
  "specter",
  "sphinx-relay",
  "thunderhub",
];

//const defaultActions = "restart none none reverse";
const defaultActions = "play none none none"; //onEnter, onLeave, onEnterBack, and onLeaveBack
// "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none".

//////////////////////////////////////////
// AUTO APPLY URL ANCHORS

// setTimeout(function () {
//   // timeout to allow initial load to redirect to anchor
//   // TODO: maybe apply the scroll-behavior: smooth to HTML after a timeout

//   sections.forEach((slug) => {
//     ScrollTrigger.create({
//       trigger: "#" + slug,
//       start: "top 25%",
//       end: "bottom 25%",
//       //markers: { startColor: "white", endColor: "white" },
//       onEnter: () => {
//         window.location.href = "#" + slug;
//       },
//       onEnterBack: () => {
//         window.location.href = "#" + slug;
//       },
//     });
//   });
// }, 2000);

//gsap.config({trialWarn: false});

// create the smooth scroller FIRST!
// ScrollSmoother.create({
//     smooth: 2,   // seconds it takes to "catch up" to native scroll position
//     effects: true, // look for data-speed and data-lag attributes on elements and animate accordingly
//     wrapper: '.scroll_track',
// 	content: '.scroll_track_content'
//   });

// backdrop-filter: blur(10px);
//background-color: rgba(0,0,0,0.1);

gsap.from("#hero-to-pitch path:first-child", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero-to-pitch",
    scrub: true,
    start: "top 75%", // "triggerElement page"
    end: "bottom 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

//////////////////////////////////////////
// PITCH

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

gsap.from("#pitch iframe", {
  duration: 0.5,
  opacity: 0,
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#pitch",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

//////////////////////////////////////////
// PRODUCTS

gsap.from("#products .subsection:nth-child(1)", {
  duration: 0.5,
  opacity: 0,
  outline: "1px solid rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: "#products",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

gsap.from("#products .subsection:nth-child(2)", {
  duration: 0.5,
  delay: 0.25,
  opacity: 0,
  outline: "1px solid rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: "#products",
    start: "top 75%", // "triggerElement page"
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
    ".product--buy img:first-child",
    { opacity: 0.4, ease: "none", duration: 0.25 },
    0
  );

buyAnchor.onmouseenter = () => buyTL.play();
buyAnchor.onmouseleave = () => buyTL.reverse();

const diyAnchor = document.querySelector(".product--diy");

const diyTL = gsap
  .timeline({ paused: true })
  .from(
    "#diy-lines path:first-child",
    { drawSVG: 0, ease: "none", duration: 0.75 },
    0
  )
  .to(
    ".product--diy img:first-child",
    { opacity: 0.4, ease: "none", duration: 0.25 },
    0
  );

diyAnchor.onmouseenter = () => diyTL.play();
diyAnchor.onmouseleave = () => diyTL.reverse();

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

gsap.from("#products-to-info path:nth-child(2)", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#products-to-info path:nth-child(2)",
    scrub: true,
    start: "top 75%", // "triggerElement page"
    end: "bottom 75%", // "triggerElement page"
  },
});

gsap.from("#products-to-info path:nth-child(3)", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#products-to-info path:nth-child(3)",
    scrub: true,
    start: "top 75%", // "triggerElement page"
    end: "bottom 75%", // "triggerElement page"
  },
});

//////////////////////////////////////////
// INFOGRAPHICS

gsap.from("#infographics .subsection:nth-child(1)", {
  duration: 0.5,
  opacity: 0,
  outline: "1px solid rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: "#infographics .subsection:nth-child(1)",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

gsap.from("#infographics .subsection:nth-child(2)", {
  duration: 0.5,
  opacity: 0,
  outline: "1px solid rgba(255,255,255,1)",
  scrollTrigger: {
    trigger: "#infographics .subsection:nth-child(2)",
    start: "top 75%", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

//////////////////////////////////////////
// BITCOIN

gsap.from("#bitcoin .subsection:nth-of-type(1)", {
  duration: 1,
  opacity: 0,
  filter: "blur(10px)",
  y: "5rem",
  scrollTrigger: {
    trigger: "#bitcoin .subsection:nth-of-type(1)",
    start: "top bottom", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

gsap.from("#bitcoin .subsection:nth-of-type(2)", {
  duration: 1,
  opacity: 0,
  filter: "blur(10px)",
  y: "-5rem",
  scrollTrigger: {
    trigger: "#bitcoin .subsection:nth-of-type(2)",
    start: "top bottom", // "triggerElement page"
    toggleActions: defaultActions,
  },
});

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

//positionServiceIcons();

const timelineServiceIcons = gsap.timeline({
  onComplete() {
    //deleteSplit();
    //scroll.update();
    //resolve();
    console.log("complete");
  },
});

function positionServiceIcons() {
  console.log("positionServiceIcons");

  bitcoinServices.forEach((service, i) => {
    var serviceClass = ".service-icon--" + service;

    gsap.set(serviceClass, {});
    gsap.to(serviceClass, {});

    const serviceElement = document.querySelector(serviceClass);
    const bitcoinSectionElement = document.querySelector("#bitcoin");
    const upOrDown = i % 2;
    const bitcoinHeight = bitcoinSectionElement.clientHeight;

    serviceElement
      ? (serviceElement.style.left = getRandomInt(5, 90) + "vw")
      : "";

    if (upOrDown) {
      gsap.set(serviceClass, {
        y: getRandomInt(0, bitcoinHeight / 2) + "px",
      });
      gsap.to(serviceClass, {
        y: getRandomInt(bitcoinHeight / 2, bitcoinHeight) + "px",
        //x: getRandomInt(0, 100) + "vw",
        ease: "in",
        delay: getRandomNumber(0, 1),
        overwrite: true,
        scrollTrigger: {
          trigger: "#bitcoin",
          scrub: true,
          start: "top 25%",
          end: "90% center", // "triggerElement page"
          //markers: { startColor: "lime", endColor: "lime" },
        },
      });
    } else {
      gsap.set(serviceClass, {
        y: getRandomInt(bitcoinHeight / 2, bitcoinHeight) + "px",
      });
      gsap.to(serviceClass, {
        y: getRandomInt(0, bitcoinHeight / 2) + "px",
        //x: getRandomInt(0, 100) + "vw",
        ease: "in",
        delay: getRandomNumber(0, 1),
        overwrite: true,
        scrollTrigger: {
          trigger: "#bitcoin",
          scrub: true,
          start: "top bottom",
          end: "90% center",
          //markers: { startColor: "lime", endColor: "blue" },
        },
      });
    }
  });
}

const tickerTL = gsap.timeline();

function onResizeComplete() {
  positionServiceIcons();
  initializeSizes();
  //gsap.delayedCall(next, crossfade);
  //tickerTL.resizePlay ? tickerTL.resizePlay.restart(true) : "";
}

var resizeTimeout = setTimeout(onResizeComplete, 400);
window.onresize = function () {
  // if (tickerTL.isActive()) tickerTL.pause();
  // if (!tickerTL.resizePlay)
  //   tickerTL.resizePlay = gsap.delayedCall(0.2, function () {
  //     tickerTL.play();
  //   });

  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(onResizeComplete, 400);
  console.log("onresize");
};

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

// TICKER

let pseudoserviceArray = gsap.utils.toArray(".pseudoservice"),
  next = 4,
  itemHeight,
  listHeight,
  windowHeight,
  kerplunk,
  kerplunk2;

function initializeSizes() {
  itemHeight = document
    .querySelector(".pseudoservice")
    .getBoundingClientRect().height;

  listHeight = document
    .querySelector(".pseudoservices")
    .getBoundingClientRect().height;

  windowHeight = document.getElementById("ticker__window").clientHeight;
}

kerplunk = CustomEase.create(
  "custom",
  "M0,0 C0.126,0.382 0.066,0.863 0.198,1.036 0.25,1.104 0.264,0.982 0.326,0.982 0.344,0.982 0.489,0.998 0.516,1 0.65,1.007 0.863,1 1,1 "
);

kerplunk2 = CustomEase.create(
  "custom",
  "M0,0 C0.126,0.382 0.178,0.802 0.288,1.052 0.303,1.088 0.372,0.99 0.434,0.99 0.502,0.99 0.497,1 0.524,1 0.664,1 0.863,1 1,1 "
);

function crossfade() {
  var action = tickerTL
    .to(pseudoserviceArray, {
      id: "thunk",
      y: "-=" + itemHeight,
      duration: 1,
      ease: kerplunk2,
      overwrite: true
    })
    .to(pseudoserviceArray[0], { y: "+=" + listHeight, duration: 0 }); // the first to the end

  pseudoserviceArray.push(pseudoserviceArray.shift()); // the first (shift) to the end (push) from the array

  // start endless run
  gsap.delayedCall(next, crossfade);

  var thisPseudoservice = pseudoserviceArray[2].innerHTML,
    thisElement = document.querySelector(
      ".service-container--" + thisPseudoservice.toLowerCase().replace(" ", "-")
    );

  var slidesContainerArray = document.querySelectorAll(".service-container");
  slidesContainerArray.forEach((thisContainer) => {
    thisContainer.style.display = "none";
  });

  if (thisElement) {
    thisElement.style.display = "flex";
  }
}

gsap.delayedCall(next, crossfade);

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

//////////////////////////////////////////
// SUPPORT

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