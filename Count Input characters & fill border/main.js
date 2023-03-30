let div = document.querySelector("div");
let input = document.querySelector("input");
let progress = document.querySelector(".progress");
let count = document.querySelector(".count");
let maxLength = input.getAttribute("maxlength");

count.textContent = maxLength;

input.oninput = function () {
  count.textContent = maxLength - this.value.length;
  count.textContent === "0" ? count.classList.add("zero") : count.classList.remove("zero");
  progress.style.width = `${(this.value.length / maxLength) * 100}%`;
  progress.style.width === "100%"
    ? progress.classList.add("full")
    : progress.classList.remove("full");
}