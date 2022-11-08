import { gsap } from "gsap";
import { positionServiceIcons } from '/@root/src/assets/js/bitcoin-animation.js'
import { initializeSizes, tick, next } from '/@root/src/assets/js/ticker-animation.js'

//////////////////////////////////////////
// RE-RENDER COMPLEX ANIMATIONS ON WINDOW RESIZE

function onResizeComplete() {
  positionServiceIcons();
  initializeSizes();
  // initialize ticker
  gsap.delayedCall(next, tick);
}

let resizeTimeout = setTimeout(onResizeComplete, 400);
window.onresize = function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(onResizeComplete, 400);
};

//////////////////////////////////////////
// SHADOW PARALLAX

gsap.utils.toArray('.img-shadow').forEach((elem) => {
  gsap.fromTo(
    elem,
    {
      y: "5rem",
    },
    {
      scrollTrigger: {
        scrub: true,
        trigger: elem,
        start: '-4rem bottom',
      },
      y: 0,
    }
  );
});