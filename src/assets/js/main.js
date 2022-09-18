gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(CustomEase);

var bodyRect = document.body.getBoundingClientRect();

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
//       start: "top center",
//       end: "bottom center",
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

//////////////////////////////////////////
// MENU

let menuOpen = document.getElementById("menu-open"),
  menuClose = document.getElementById("menu-close"),
  openedMenuArray = gsap.utils.toArray(".opened-menu"),
  closedMenuArray = gsap.utils.toArray(".closed-menu");

menuOpen.addEventListener("click", (e) => openMenu(e));
menuClose.addEventListener("click", (e) => closeMenu(e));

function openMenu(e) {
  e.preventDefault();
  gsap.to("#menu", { y: "0vh" });
  gsap.to("main", { y: "100vh" });
  gsap.to(openedMenuArray, { x: "0", opacity: 1, width: "auto" });
  gsap.to(closedMenuArray, { x: "3rem", opacity: 0, width: 0 });
  gsap.to("html", { overflow: "hidden" });
}
function closeMenu(e) {
  e.preventDefault();
  gsap.to("#menu", { y: "-100vh" });
  gsap.to("main", { y: "0vh" });
  gsap.to(closedMenuArray, { x: "0", opacity: 1, width: "auto" });
  gsap.to(openedMenuArray, { x: "3rem", opacity: 0, width: 0 });
  gsap.to("html", { overflow: "overlay" });
}

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


//////////////////////////////////////////
// HEADER

gsap.to("header", {
  duration: 0.5,
  backgroundColor: "rgba(0,0,0,0.1)",
  backdropFilter: "blur(10px)",
  scrollTrigger: {
    trigger: "#hero-image",
    scrub: true,
    start: "center top", // "triggerElement page"
    end: "bottom top", // "triggerElement page"
  },
});

gsap.to(".header__logo", {
  duration: 0.5,
  opacity: "1",
  filter: "blur(0px)",
  scrollTrigger: {
    trigger: "#hero-image",
    scrub: true,
    start: "center top", // "triggerElement page"
    end: "bottom top", // "triggerElement page"
  },
});

gsap.from("#hero-to-pitch path:first-child", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#hero-to-pitch",
    scrub: true,
    start: "top center", // "triggerElement page"
    end: "bottom center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

//////////////////////////////////////////
// PITCH

gsap.from("#pitch", {
  duration: 0.5,
  y: "5rem",
  scale: 0.9,
  opacity: 0,
  //delay: 0.75,
  scrollTrigger: {
    trigger: "#pitch",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

//////////////////////////////////////////
// PRODUCTS

gsap.from("#products .subsection:nth-child(1)", {
  duration: 0.5,
  opacity: 0,
  outline: "1px solid rgba(255,255,255,1)",
  //filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#products",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#products .subsection:nth-child(2)", {
  duration: 0.5,
  delay: 0.25,
  opacity: 0,
  outline: "1px solid rgba(255,255,255,1)",
  //filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#products",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#products-to-info path:first-child", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#products-to-info path:first-child",
    scrub: true,
    start: "top center", // "triggerElement page"
    end: "bottom center", // "triggerElement page"
  },
});

gsap.from("#products-to-info path:nth-child(2)", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#products-to-info path:nth-child(2)",
    scrub: true,
    start: "top center", // "triggerElement page"
    end: "bottom center", // "triggerElement page"
  },
});

gsap.from("#products-to-info path:nth-child(3)", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#products-to-info path:nth-child(3)",
    scrub: true,
    start: "top center", // "triggerElement page"
    end: "bottom center", // "triggerElement page"
  },
});

//////////////////////////////////////////
// INFOGRAPHICS

gsap.from("#infographics .subsection:nth-child(1)", {
  duration: 0.5,
  //y: "5rem",
  //scale: 0.8,
  //rotateX: 15,
  opacity: 0,
  //delay: 0.75,
  outline: "1px solid rgba(255,255,255,1)",
  //filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#infographics .subsection:nth-child(1)",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#infographics .subsection:nth-child(2)", {
  duration: 0.5,
  //y: "5rem",
  //scale: 0.8,
  //rotateX: 15,
  opacity: 0,
  //delay: 0.75,
  outline: "1px solid rgba(255,255,255,1)",
  //filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#infographics .subsection:nth-child(2)",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

//////////////////////////////////////////
// BITCOIN

gsap.from("#bitcoin .subsection:nth-of-type(1)", {
  duration: 1,
  opacity: 0,
  //outline: "1px solid rgba(255,255,255,1)",
  filter: "blur(10px)",
  y: "5rem",
  scrollTrigger: {
    trigger: "#bitcoin .subsection:nth-of-type(1)",
    start: "top bottom", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#bitcoin .subsection:nth-of-type(2)", {
  duration: 1,
  opacity: 0,
  //outline: "1px solid rgba(255,255,255,1)",
  filter: "blur(10px)",
  y: "-5rem",
  scrollTrigger: {
    trigger: "#bitcoin .subsection:nth-of-type(2)",
    start: "top bottom", // "triggerElement page"
    toggleActions: defaultActions
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

bitcoinServices.forEach((service) => {
  const serviceElement = document.querySelector(".service-icon--" + service);
  const bitcoinSectionElement = document.querySelector("#bitcoin");
  const upOrDown = getRandomInt(0, 1);
  const bitcoinHeight = bitcoinSectionElement.clientHeight;

  serviceElement
    ? (serviceElement.style.left = getRandomInt(5, 90) + "vw")
    : "";

  if (upOrDown) {
    gsap.set(".service-icon--" + service, {
      y: getRandomInt(0, bitcoinHeight / 2) + "px",
    });
    gsap.to(".service-icon--" + service, {
      y: getRandomInt(bitcoinHeight / 2, bitcoinHeight) + "px",
      //x: getRandomInt(0, 100) + "vw",
      ease: "in",
      delay: getRandomNumber(0, 1),
      scrollTrigger: {
        trigger: "#bitcoin",
        scrub: true,
        start: "top 25%", // "triggerElement page"
        end: "90% center", // "triggerElement page"
        //markers: { startColor: "lime", endColor: "lime" },
      },
    });
  } else {
    gsap.set(".service-icon--" + service, {
      y: getRandomInt(bitcoinHeight / 2, bitcoinHeight) + "px",
    });
    gsap.to(".service-icon--" + service, {
      y: getRandomInt(0, bitcoinHeight / 2) + "px",
      //x: getRandomInt(0, 100) + "vw",
      ease: "in",
      delay: getRandomNumber(0, 1),
      scrollTrigger: {
        trigger: "#bitcoin",
        scrub: true,
        start: "top bottom", // "triggerElement page"
        end: "90% center", // "triggerElement page"
        //markers: { startColor: "orange", endColor: "orange" },
      },
    });
  }
});

gsap.from("#bitcoin-to-be path:first-child", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#bitcoin-to-be",
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
});

//////////////////////////////////////////
// BE YOUR OWN

gsap.from("#be-your-own h1", {
  duration: 0.5,
  y: "5rem",
  //scale: 0.8,
  opacity: 0,
  //delay: 0.75,
  scrollTrigger: {
    trigger: "#be-your-own",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});


gsap.from("#be-your-own p", {
  duration: .5,
  y: "5rem",
  filter: "blur(10px)",
  opacity: 0,
  //delay: 0.75,
  scrollTrigger: {
    trigger: "#be-your-own h1",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#be-your-own #ticker", {
  duration: 1.5,
  filter: "blur(20px)",
  opacity: 0,
  //delay: 0.75,
  scrollTrigger: {
    trigger: "#be-your-own #ticker",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

let pseudoserviceArray = gsap.utils.toArray(".pseudoservice"),
  next = 3, // time to change
  itemHeight = document
    .querySelector(".pseudoservice")
    .getBoundingClientRect().height,
  listHeight = document
    .querySelector(".pseudoservices")
    .getBoundingClientRect().height,
  windowHeight = document.getElementById("ticker__window").clientHeight,
  kerplunk = CustomEase.create(
    "custom",
    "M0,0 C0.126,0.382 0.066,0.863 0.198,1.036 0.25,1.104 0.264,0.982 0.326,0.982 0.344,0.982 0.489,0.998 0.516,1 0.65,1.007 0.863,1 1,1 "
  ),
  kerplunk2 = CustomEase.create(
    "custom",
    "M0,0 C0.126,0.382 0.178,0.802 0.288,1.052 0.303,1.088 0.372,0.99 0.434,0.99 0.502,0.99 0.497,1 0.524,1 0.664,1 0.863,1 1,1 "
  );

function crossfade() {
  var action = gsap
    .timeline()
    .to(pseudoserviceArray, {
      id: "thunk",
      y: "-=" + itemHeight,
      duration: 1,
      ease: kerplunk2,
    })
    .to(pseudoserviceArray[0], { y: "+=" + listHeight, duration: 0 }); // the first to the end

  pseudoserviceArray.push(pseudoserviceArray.shift()); // the first (shift) to the end (push) from the array
  //console.log(pseudoserviceArray);
  //console.log(itemHeight);

  // start endless run
  gsap.delayedCall(next, crossfade);

  var thisPseudoservice = pseudoserviceArray[2].innerHTML,
    thisElement = document.querySelector(
      ".slides-container--" + thisPseudoservice.toLowerCase()
    );

  var slidesContainerArray = document.querySelectorAll(".slides-container");
  slidesContainerArray.forEach((thisContainer) => {
    thisContainer.style.display = "none";
  });

  if (thisElement) {
    thisElement.style.display = "flex";
  }
}

// start the crossfade after next = 3 sec
gsap.delayedCall(next, crossfade);

document.querySelector(".services").addEventListener("mouseenter", pauseThunk);
// TODO: pause not working - Id not found
function pauseThunk () {
    console.log('asfd')
    gsap.getById("thunk").kill();
}


// CAROUSEL

var slideDelay = 1.5;
var slideDuration = 0.3;
var wrap = true;

var slides = document.querySelectorAll(".slide");
var prevButton = document.querySelector("#prevButton");
var nextButton = document.querySelector("#nextButton");
var progressWrap = gsap.utils.wrap(0, 1);

var numSlides = slides.length;

gsap.set(slides, {
  xPercent: (i) => i * 100,
});

var wrapX = gsap.utils.wrap(-100, (numSlides - 1) * 100);

var animation = gsap.to(slides, {
  xPercent: "+=" + numSlides * 100,
  duration: 1,
  ease: "none",
  paused: true,
  repeat: -1,
  modifiers: {
    xPercent: wrapX,
  },
});

var proxy = document.createElement("div");
var slideAnimation = gsap.to({}, {});
var slideWidth = 0;
var wrapWidth = 0;

resize();

window.addEventListener("resize", resize);

prevButton.addEventListener("click", function () {
  animateSlides(1);
});

nextButton.addEventListener("click", function () {
  animateSlides(-1);
});

// function updateDraggable() {
//   slideAnimation.kill();
//   this.update();
// }

function animateSlides(direction) {
  slideAnimation.kill();
  var x = snapX(gsap.getProperty(proxy, "x") + direction * slideWidth);

  slideAnimation = gsap.to(proxy, {
    x: x,
    duration: slideDuration,
    onUpdate: updateProgress,
  });
}

function updateProgress() {
  animation.progress(progressWrap(gsap.getProperty(proxy, "x") / wrapWidth));
}

function snapX(value) {
  let snapped = gsap.utils.snap(slideWidth, value);
  return wrap
    ? snapped
    : gsap.utils.clamp(-slideWidth * (numSlides - 1), 0, snapped);
}

function resize() {
  var norm = gsap.getProperty(proxy, "x") / wrapWidth || 0;

  slideWidth = slides[0].offsetWidth;
  wrapWidth = slideWidth * numSlides;

  wrap; // || draggable.applyBounds({minX: -slideWidth * (numSlides - 1), maxX: 0});

  gsap.set(proxy, {
    x: norm * wrapWidth,
  });

  animateSlides(0);
  slideAnimation.progress(1);
}

gsap.from("#be-to-powered path", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#be-to-powered path",
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
});

//////////////////////////////////////////
// POWERED

gsap.from("#powered-by h1", {
  duration: 0.5,
  y: "-5rem",
  //scale: 0.8,
  opacity: 0,
  //delay: 0.75,
  scrollTrigger: {
    trigger: "#powered-by h1",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});


gsap.from("#powered-by p", {
  duration: .5,
  //y: "-10rem",
  filter: "blur(10px)",
  opacity: 0,
  //delay: 0.75,
  scrollTrigger: {
    trigger: "#powered-by h1",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#powered-by svg", {
  duration: 1,
  //y: "-10rem",
  filter: "blur(20px)",
  opacity: 0,
  //delay: 0.75,
  scrollTrigger: {
    trigger: "#powered-by svg",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#powered-to-support path", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#powered-to-support path",
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
});

//////////////////////////////////////////
// SUPPORT

gsap.from("#support", {
  duration: 0.5,
  //y: "5rem",
  //scale: 0.8,
  //rotateX: 15,
  opacity: 0,
  //delay: 0.75,
  outline: "1px solid rgba(255,255,255,1)",
  //filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#support",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#support-to-dev path", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#support-to-dev path",
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
});

//////////////////////////////////////////
// DEV

gsap.from("#dev", {
  duration: 0.5,
  //y: "5rem",
  scale: 0.8,
  //rotateX: 15,
  opacity: 0,
  //delay: 0.75,
  //outline: "1px solid rgba(255,255,255,1)",
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#dev",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#dev .col:nth-child(1)", {
  duration: 0.5,
  x: "5rem",
  //scale: 0.8,
  //rotateX: 15,
  opacity: 0,
  delay: 0.5,
  //outline: "1px solid rgba(255,255,255,1)",
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#dev",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#dev .col:nth-child(2)", {
  duration: 0.5,
  x: "-5rem",
  scale: 0.5,
  //rotateX: 15,
  opacity: 0,
  delay: .75,
  //outline: "1px solid rgba(255,255,255,1)",
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#dev",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

gsap.from("#dev-to-contact path", {
  drawSVG: 0,
  ease: "none",
  scrollTrigger: {
    trigger: "#dev-to-contact path",
    scrub: true,
    start: "top center",
    end: "bottom center",
  },
});

//////////////////////////////////////////
// CONTACT

gsap.from("#community", {
  duration: 0.5,
  //y: "5rem",
  scale: 0.8,
  //rotateX: 15,
  opacity: 0,
  //delay: 0.75,
  //outline: "1px solid rgba(255,255,255,1)",
  filter: "blur(10px)",
  scrollTrigger: {
    trigger: "#community",
    start: "top center", // "triggerElement page"
    toggleActions: defaultActions
  },
});

//Librarys

/*
var imagesLoaded = require('imagesloaded');
import barba from '@barba/core';
import LocomotiveScroll from 'locomotive-scroll';
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(Draggable, ScrollToPlugin, ScrollTrigger, InertiaPlugin, SplitText);




// Locomotive Scroll
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    tablet: {
        breakpoint: 961
    }
});




// Use Locomotive Scroll with ScrollTrigger
scroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy(".locomotive", {
  scrollTop(value) {
    return arguments.length ? scroll.scrollTo(value, 0, 0) : scroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector(".locomotive").style.transform ? "transform" : "fixed"
});




// Mobile Menu Toggle
const menuIcon = document.querySelector('.navBtnContainer');
const mobileNav = document.querySelector('.mobileNav');

const menuToggle = function () {
    menuIcon.addEventListener(`click`, function() {
        if(this.classList.contains(`active`)) {
            this.classList.remove(`active`);
            mobileNav.classList.remove(`active`);
        } else {
            this.classList.add(`active`);
            mobileNav.classList.add(`active`);
        }
    });
}

menuToggle();




// Custom cursor
const cursorAnimate = function () {
    const cursors = document.querySelector('.cursors')
    const cursor = cursors.querySelector('.cursor')
    const cursorLinks = document.querySelectorAll('a, video, .resumeItem')
    let cursorX = 0
    let cursorY = 0
    let aimX = 0
    let aimY = 0
    let speed = 0.2

    const cursorEase = function () {
        cursorX += (aimX - cursorX) * speed
        cursorY += (aimY - cursorY) * speed

        cursor.style.left = cursorX + "px"
        cursor.style.top = cursorY + "px"

        requestAnimationFrame(cursorEase)
    }

    cursorEase()

    document.addEventListener('mousemove', function (event) {
        aimX = event.pageX
        aimY = event.pageY
    })

    cursorLinks.forEach(cursorLink => {
        cursorLink.addEventListener('mouseover', function () {
            cursor.classList.add(`hover`)
        })
        cursorLink.addEventListener('mouseout', function () {
            cursor.classList.remove(`hover`)
        })
    })
}




// Scroll Trigger Hero Image
const heroImgInnerAnimate = function () {
    const heroImgInner = document.querySelectorAll('.heroImgInner');
    heroImgInner.forEach(function (heroImgInner){
        gsap.to(heroImgInner, {
            scrollTrigger: {
                trigger: heroImgInner,
                scroller: ".locomotive",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            y: "-43.75%",
            ease: "none"
        })
    })
}




// Footer Marquee
const footerMarqueeAnimate = function () {
    const footerMarquee = document.querySelector('.footerMarqueeItem');
    const footerMarqueeTrack = document.querySelector('.footerMarqueeTrack');
    const footerMarqueeItemWidth = footerMarquee.offsetWidth;
    //console.log(footerMarqueeItemWidth);
    const footerMarqueeTL = gsap.timeline({repeat:-1, defaults:{ease:"none"}});
    footerMarqueeTL.to(footerMarqueeTrack,{x:-footerMarqueeItemWidth, duration:20});  
}




// Scroll Trigger Marquee
const marqueeAnimate = function () {
    const marquee = document.querySelectorAll('.marqueeTrack');
    marquee.forEach(function (marquee){
        gsap.to(marquee, {
            scrollTrigger: {
                trigger: marquee,
                scroller: ".locomotive",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            x: "-33.33%",
            ease: "none"
        })
    })
}




// Scroll Trigger Spin
const spinTextAnimate = function () {
    const spinText = document.querySelectorAll('.spinText');
    spinText.forEach(function (spinText){
        gsap.to(spinText, {
            scrollTrigger: {
                trigger: spinText,
                scroller: ".locomotive",
                start: "top bottom",
                end: "bottom top",
                scrub: 1,
            },
            rotation:360,
            ease: "none"
        })
    })
}




// Work Experience Dropdown
const experienceToggle = function () {
    const resumeItems = document.querySelectorAll('.resumeItem');
    resumeItems.forEach(function (item) {
        let jobTitleHeight = item.offsetHeight;
        item.addEventListener('click', function () {
            let jobDescHeight = this.children[4].offsetHeight;
            if(this.classList.contains('active')) {
                this.classList.remove('active')
                this.style.height = jobTitleHeight + "px"
            } else {
                this.classList.add('active')
                this.style.height = jobTitleHeight + jobDescHeight + "px"
            }
            setTimeout(function () { scroll.update(); }, 1000)
        })
    });
}
experienceToggle();




// Update scroll height after Images Load
imagesLoaded( 'body', function() {
    scroll.update();
    cursorAnimate();
    footerMarqueeAnimate();
    marqueeAnimate();
    spinTextAnimate();
    ScrollTrigger.matchMedia({
        "(min-width: 960px)": function() {
            heroImgInnerAnimate();
        }
    })
});








// Barba

const transitionPanel1 = document.querySelector('#transitionPanel1');
const loadPanel = document.querySelector('.loadPanel');

barba.hooks.after(() => {
    marqueeAnimate();
    spinTextAnimate();
    experienceToggle();
    cursorAnimate();
    ScrollTrigger.matchMedia({
        "(min-width: 960px)": function() {
            heroImgInnerAnimate();
        }
    })
    scroll.update();
});


barba.init({

    transitions: [{
        name: 'default',



        once({ next }) {

            return new Promise(resolve => {

                const timeline = gsap.timeline({
                    onComplete() {
                        deleteSplit();
                        scroll.update();
                        resolve();
                    }
                });

                const splitHeadline = new SplitText('h1', {type:'words'})
                function deleteSplit() {
                    splitHeadline.revert()
                }


                timeline
                    .set('.load-content', {opacity: 0})
                    .set('main', {y: 200, opacity: 0})
                    .set('header', {y: -100, opacity: 0})
                    .set(splitHeadline.words, {opacity: 0, y: 48})
                    .to('.load-content', {duration: 1, opacity: 1}, 0.5)
                    .to('.loadPanel', {duration: 1, height: 0, ease: "power4.inOut"}, '+=1')
                    .to('.load-content', {duration: 1, opacity: 0}, '-=1')
                    .to('header', {duration: 1, y: 0, opacity: 1, ease: "power4.out"}, '-=0.5')
                    .to('main', {duration: 1, y: 0, opacity: 1, ease: "power4.out"}, '-=1')
                    .to(splitHeadline.words, {duration: 1, y: 0, opacity: 1, ease: "power3.out", stagger: 0.04}, '-=1')
                    .set('.loadPanel', {opacity: 0, display:'none'})

            });
            
        },



        leave({ current, next, trigger }) {

            return new Promise(resolve => {

                const timeline = gsap.timeline({
                    onComplete() {
                        resolve();
                    }
                });

                transitionPanel1.classList.add(`active`);
                mobileNav.classList.remove(`active`);
                menuIcon.classList.remove(`active`);

                timeline
                    .to('footer', {duration: 0.5, opacity: 0}, 0)
                    .to(current.container, {duration: 0.5, opacity: 0}, 0)
                    .to(current.container, {display: 'none'})

            });

        },



        beforeEnter({ current, next, trigger }) {

            scroll.scrollTo(0, 0);

        },



        enter({ current, next, trigger }) {

            imagesLoaded( 'body', function() {
                scroll.update();
            });

            return new Promise(resolve => {
                
                const timeline = gsap.timeline({
                    onComplete() {
                        transitionPanel1.classList.remove(`active`);
                        resolve();
                    }
                });

                timeline
                    .set(current.container, {opacity: 0})
                    .set(next.container, {opacity: 0})

            });
        },



        afterEnter({ current, next, trigger }) {

            return new Promise(resolve => {
                
                const timeline = gsap.timeline({
                    onComplete() {
                        resolve();
                    }
                });

                timeline
                    .to(next.container, {duration: 1, opacity: 1}, 0.5)
                    .to('footer', {duration: 1, opacity: 1}, 0.5)

            });
        },


        
    }],

    views: [{}],

    //debug: true
});

*/
