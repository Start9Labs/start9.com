/********************************************/
/* BITCOIN SECTION FLOATING ICONS ANIMATION */
/********************************************/
import { gsap } from "gsap";

//////////////////////////////////////////
// DATA
// TODO: pull this from data js instead
const bitcoinServices = [
  "bitcoind",
  "btcpay",
  "cln",
  "electrs",
  "lnd",
  "lit",
  "mempool",
  "rtl",
  "spark",
  "specter",
  "sphinx",
  "thunderhub",
];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

export function positionServiceIcons() {
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
