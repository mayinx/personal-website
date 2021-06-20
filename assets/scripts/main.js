window.onload = function () {
  let navbar = document.getElementById("top-navbar");

  /* actively hide avatar overlay if present to avoid conflicts */
  navbar.addEventListener("click", function (e) {
    hideAvatarOverlay();
  });

  // TODO: use id instead to avoid queryselectorall here - we won't need more than one trigger -  a permanet nav trigegr even on large screens isn't nice ...
  document.querySelectorAll(".navbar-toggler").forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      navbar.classList.toggle("toggled");
      trigger.classList.toggle("toggled");
      e.preventDefault();
    });
  });

  let avatar = document.getElementById("profile-pic");
  let heroSection = document.getElementById("page-hero");
  let learnMoreAction = document.getElementById("learn-more-action");
  let hireMeAction = document.getElementById("hire-me-action");

  function toggleAvatarOverlay() {
    heroSection.classList.toggle("avatar-overlay-togggled");
    // heroSection.classList.toggle("avatar-overlay-togggled");
    console.log("-- yo - avatar overlay  togggled!");
  }

  function hideAvatarOverlay() {
    heroSection.classList.remove("avatar-overlay-togggled");
    // heroSection.classList.toggle("avatar-overlay-togggled");
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

  // window.addEventListener("click", function (e) {
  //   toggleAvatarOverlay;
  // });
};
