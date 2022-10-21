/********************************************/
/* BE YOUR OWN TICKER ANIMATION             */
/********************************************/

const tickerTL = gsap.timeline();

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

function tick() {
  var action = tickerTL
    .to(pseudoserviceArray, {
      id: "thunk",
      y: "-=" + itemHeight,
      duration: 1,
      ease: kerplunk2,
      overwrite: true,
    })
    .to(pseudoserviceArray[0], { y: "+=" + listHeight, duration: 0 });

  pseudoserviceArray.push(pseudoserviceArray.shift());

  // start endless run
  gsap.delayedCall(next, tick);

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

// initialize
gsap.delayedCall(next, tick);