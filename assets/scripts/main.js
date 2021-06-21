// TODO: Refactor the various 'toggle and hide Overlay helpers'
// by merging them into one function each that handles explicit
// hiding as well as toggling
window.onload = function () {
  "use strict";

  let navbar = document.getElementById("top-navbar");
  let navbarTrigger = document.getElementById("navbar-toggler");
  let navOverlay = document.getElementById("nav-overlay");

  let avatar = document.getElementById("profile-pic");
  let heroSection = document.getElementById("page-hero");
  let learnMoreAction = document.getElementById("learn-more-action");
  let hireMeAction = document.getElementById("hire-me-action");

  /* ensure that nav and nav overlay vamnishes on scroll*/
  document.addEventListener("scroll", function () {
    navbar.classList.remove("toggled");
    navbarTrigger.classList.remove("toggled");
  });

  /* actively hide avatar overlay if present to avoid conflicts */
  navbar.addEventListener("click", function (e) {
    hideAvatarOverlay();
  });

  /* Set active nav item + toggle navbar-overlay (i.e. page-overlay caused by navbar interaction
   * - still looking for the aappropriate wording here - so ...) */
  document.querySelectorAll(".nav-link").forEach((navLink) => {
    navLink.addEventListener("click", function (e) {
      navbar.classList.toggle("toggled");
      navbarTrigger.classList.toggle("toggled");
    });
  });

  navOverlay.addEventListener("click", function (e) {
    navbar.classList.toggle("toggled");
    navbarTrigger.classList.toggle("toggled");
  });

  // TODO: use id instead to avoid queryselectorall here - we won't need more than one trigger -  a permanet nav trigegr even on large screens isn't nice ...
  navbarTrigger.addEventListener("click", function (e) {
    navbar.classList.toggle("toggled");
    this.classList.toggle("toggled");
    e.preventDefault();
  });

  function toggleAvatarOverlay() {
    heroSection.classList.toggle("avatar-overlay-togggled");
    document.body.classList.toggle("noscroll");
    console.log("-- yo - avatar overlay  togggled!");
  }

  function hideAvatarOverlay() {
    heroSection.classList.remove("avatar-overlay-togggled");
    document.body.classList.remove("noscroll");
    console.log("-- yo - avatar overlay  removed!");
  }

  /* TODO: Which events must be catched to ensure we cover all devices ?!
   * Check this out f.i.:
   * https://developer.mozilla.org/en-US/docs/Web/API/Touch_events/Supporting_both_TouchEvent_and_MouseEvent  */
  ["mouseover", "touchmove"].forEach(function (e) {
    avatar.addEventListener(e, toggleAvatarOverlay);
    // e.preventDefault();
  });

  /* handles internal page scrolling */
  function handleScrolling(element, event) {
    event.preventDefault();
    const href = element.getAttribute("href");
    const offsetTop = document.querySelector(href).offsetTop;

    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  }

  learnMoreAction.addEventListener("click", function (e) {
    toggleAvatarOverlay();
    handleScrolling(this, e);
    // e.preventDefault();
  });

  hireMeAction.addEventListener("click", function (e) {
    toggleAvatarOverlay();
    handleScrolling(this, e);
  });
};
