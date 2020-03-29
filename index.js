const fallingCherry = document.querySelector("#falling-cherries");
const halfCherry = document.querySelector(".half");
const fullCherry = document.querySelector(".full");
const container = document.querySelector(".container");

let isScrolling;

function detectMouseWheelDirection(e) {
  let delta = null,
    direction = false;
  if (!e) {
    e = window.event;
  }
  if (e.wheelDelta) {
    delta = e.wheelDelta / 60;
  } else if (e.detail) {
    delta = -e.detail / 2;
  }
  if (delta !== null) {
    direction = delta > 0 ? "up" : "down";
  }

  return direction;
}

function handleMouseWheelDirection(direction) {
  console.log(direction);
  window.clearTimeout(isScrolling);
  if (direction == "down") {
    fallingCherry.classList.add("running");
    container.classList.add("running");
    isScrolling = setTimeout(function() {
      fallingCherry.classList.remove("running");
      container.classList.remove("running");
    }, 66);
  } else if (direction == "up") {
    fallingCherry.classList.add("running");
    container.classList.add("running");
    isScrolling = setTimeout(function() {
      fallingCherry.classList.remove("running");
      container.classList.remove("running");
    }, 66);
  } else {
  }
}

document.onmousewheel = function(e) {
  handleMouseWheelDirection(detectMouseWheelDirection(e));
};
if (window.addEventListener) {
  document.addEventListener("DOMMouseScroll", function(e) {
    handleMouseWheelDirection(detectMouseWheelDirection(e));
  });
}
