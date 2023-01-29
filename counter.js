let count = 0;

document.querySelectorAll("button").forEach((item) => {
  item.addEventListener("click", () => {
    if (item.id === "decrease") {
      count -= 1;
    } else if (item.id === "increase") {
      count += 1;
    } else {
      count = 0;
    }
    updateCounter();
  });
});

function updateCounter() {
  document.querySelector(".count").innerHTML = count;
  if (count > 0) {
    document.querySelector(".count").style.color = "rgb(1, 78, 1)";
  } else if (count < 0) {
    document.querySelector(".count").style.color = "rgb(129, 1, 1)";
  } else {
    document.querySelector(".count").style.color = "antiquewhite";
  }
}
