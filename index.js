const fallingCherry = document.querySelector("#falling-cherries");
const halfCherry = document.querySelector(".half");
const fullCherry = document.querySelector(".full");
const container = document.querySelector(".container");

let isScrolling;

window.addEventListener(
  "wheel",
  function(event) {
    window.clearTimeout(isScrolling);
    fallingCherry.classList.add("running");
    container.classList.add("running");
    isScrolling = setTimeout(function() {
      fallingCherry.classList.remove("running");
      container.classList.remove("running");
    }, 66);
  },
  false
);
