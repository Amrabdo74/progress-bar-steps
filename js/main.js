const allBars = document.querySelectorAll(".steps");
const next = document.querySelector("#next");
const prev = document.querySelector("#prev");
const bar_color = document.querySelector(".bar-color");
let current_width = 0;
////////////////////

next.addEventListener("click", () => {
  current_width += 33;
  bar_color.style.width = `${current_width}%`;

  if (current_width > 30) {
    prev.disabled = false;
    prev.classList.add("next");
    prev.classList.remove("prev");
  }

  if (current_width == 99) {
    next.disabled = true;
    next.classList.add("prev");
  }
});
prev.addEventListener("click", () => {
  current_width -= 33;
  bar_color.style.width = `${current_width}%`;
  if (current_width == 0) {
    prev.disabled = true;
    prev.classList.remove("next");
    prev.classList.add("prev");
  } else if (current_width < 99) {
    next.disabled = false;
    next.classList.remove("prev");
  }
});
