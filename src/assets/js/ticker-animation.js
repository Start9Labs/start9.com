/********************************************/
/* BE YOUR OWN TICKER ANIMATION             */
/********************************************/

const tickerTL = gsap.timeline();

let pseudoserviceArray = gsap.utils.toArray(".pseudoservice"),
  itemHeight,
  listHeight,
  windowHeight;

export const next = 4
const kerplunk2 = CustomEase.create(
  "custom",
  "M0,0 C0.126,0.382 0.178,0.802 0.288,1.052 0.303,1.088 0.372,0.99 0.434,0.99 0.502,0.99 0.497,1 0.524,1 0.664,1 0.863,1 1,1 "
);

export function initializeSizes() {
  itemHeight = document
    .querySelector(".pseudoservice")
    .getBoundingClientRect().height;

  listHeight = document
    .querySelector(".pseudoservices")
    .getBoundingClientRect().height;

  windowHeight = document.getElementById("ticker__window").clientHeight;
}

// init()
export function tick() {
  let action = tickerTL
    .to(pseudoserviceArray, {
      id: "thunk",
      y: "-=" + itemHeight,
      duration: 1,
      ease: kerplunk2,
      overwrite: true,
    })
    .to(pseudoserviceArray[0], { y: "+=" + listHeight, duration: 0 });

  pseudoserviceArray.push(pseudoserviceArray.shift());

  const startIndex = window.screen.width < 1300 ? 1 : 2

  let thisPseudoservice = pseudoserviceArray[startIndex].innerHTML
  let thisServiceElement = document.querySelector(".service-container--" + thisPseudoservice.toLowerCase().replace(" ", "-"));
  
  if (thisServiceElement) {
    document.querySelectorAll(".service-container").forEach(a => a.style.display = "none")
    thisServiceElement.style.display = "flex";
  }
  
  // start endless run
  gsap.delayedCall(next, tick);
}

function init() {
  // initially start ticker at i=2, which is where bar is positioned to start
  let thisPseudoservice = pseudoserviceArray[2].innerHTML
  let thisServiceElement = document.querySelector(".service-container--" + thisPseudoservice.toLowerCase().replace(" ", "-"));

  if (thisServiceElement) {
    document.querySelectorAll(".service-container").forEach(a => a.style.display = "none")
    thisServiceElement.style.display = "flex";
  }
}

// @NOTE in progress implementation - do not remove
function moveTick(service) {
  
  let thisPseudoservice = pseudoserviceArray.slice().filter(a => a.innerHTML === service)[0].innerHTML
  let thisElement = document.querySelector(".service-container--" + thisPseudoservice.toLowerCase().replace(" ", "-"));


  let current = pseudoserviceArray[2].innerHTML
  let currentIndex = 2

  // get index of current tick
  const item = Array.from(document.querySelectorAll(".service-container")).filter(a => a.style.display === 'flex')
  if (item.length > 0) {
    current = Array.from(item[0].classList).filter(a => a.includes("--"))[0].split("--")[1]
    currentIndex = pseudoserviceArray.findIndex(a => a.innerHTML.toLowerCase() === current)
    thisPseudoservice = pseudoserviceArray[currentIndex].innerHTML
  }

  let i = pseudoserviceArray.findIndex(a => a.innerHTML === service)
  console.log(i)
  let diff = Math.abs(currentIndex - i)
  let y
  if (i > currentIndex) {
    y = "-=" + (itemHeight * diff)
  } else {
    y = "+=" + (itemHeight * diff)
  }
  
  tickerTL
  .to(pseudoserviceArray, {
    id: "thunk",
    y,
    duration: 1,
    ease: kerplunk2,
    overwrite: 'auto',
  })
  var slidesContainerArray = document.querySelectorAll(".service-container");
  slidesContainerArray.forEach((thisContainer) => {
    thisContainer.style.display = "none";
  });

  if (thisElement) {
    thisElement.style.display = "flex";
  }
}
