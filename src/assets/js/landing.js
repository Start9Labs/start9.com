//////////////////////////////////////////
// GSAP ACTIONS
// options: "play", "pause", "resume", "reset", "restart", "complete", "reverse", and "none"
// arguments: onEnter, onLeave, onEnterBack, and onLeaveBack
const defaultActions = "play none none none";



//////////////////////////////////////////
// RE-RENDER COMPLEX ANIMATIONS ON WINDOW RESIZE

function onResizeComplete() {
  positionServiceIcons();
  initializeSizes();
}

var resizeTimeout = setTimeout(onResizeComplete, 400);
window.onresize = function () {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(onResizeComplete, 400);
};



//////////////////////////////////////////
// AUTO APPLY URL ANCHORS

// // TODO: pull this from data js instead
// const sections = [
//   "pitch",
//   "products",
//   "infographics",
//   "bitcoin",
//   "be-your-own",
//   "powered-by",
//   "support",
//   "dev",
//   "community",
// ];

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
