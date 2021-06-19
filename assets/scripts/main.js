window.onload = function () {
  let navbar = document.getElementById("top-navbar");
  document.querySelectorAll(".navbar-toggler").forEach((trigger) => {
    trigger.addEventListener("click", function (e) {
      console.log("- click on outside trigger");
      e.preventDefault();
      navbar.classList.toggle("toggled");
      trigger.classList.toggle("toggled");
      console.log("-- outside trigger clicked!");
    });
  });
};
