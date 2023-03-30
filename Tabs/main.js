let tabs = document.querySelectorAll(".tabs > li");
let divs = document.querySelectorAll(".content > div");

tabs.forEach(tab => {
  tab.addEventListener("click", (e) => {
    tabs.forEach(tab => {
      tab.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    
    divs.forEach(div => {
      div.classList.remove("active");
    });
    document.querySelector(e.currentTarget.dataset.content).classList.add("active");
  });
});