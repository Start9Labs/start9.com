//////////////////////////////////////////
// MENU

let menuOpen = document.getElementById("menu-open"),
  menuClose = document.getElementById("menu-close"),
  openedMenuArray = gsap.utils.toArray(".opened-menu"),
  closedMenuArray = gsap.utils.toArray(".closed-menu");

menuOpen.addEventListener("click", (e) => openMenu(e));
menuClose.addEventListener("click", (e) => closeMenu(e));

export default function openMenu(e) {
  e.preventDefault();
  gsap.to("#menu", { y: "0vh" });
  gsap.to("main", { y: "100vh" });
  gsap.to(openedMenuArray, { x: "0", opacity: 1, width: "auto" });
  gsap.to(closedMenuArray, { x: "3rem", opacity: 0, width: 0 });
  gsap.to("html", { overflow: "hidden" });
  document.querySelector('html').classList.add("menu-is-open");
}
function closeMenu(e) {
  e.preventDefault();
  gsap.to("#menu", { y: "-100vh" });
  gsap.to("main", { y: "0vh" });
  gsap.to(closedMenuArray, { x: "0", opacity: 1, width: "auto" });
  gsap.to(openedMenuArray, { x: "3rem", opacity: 0, width: 0 });
  gsap.to("html", { overflow: "scroll" });
  gsap.to("html", { overflow: "overlay" });
  document.querySelector('html').classList.remove("menu-is-open");
}