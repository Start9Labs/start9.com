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