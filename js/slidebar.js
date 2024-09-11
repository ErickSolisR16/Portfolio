const icon = document.getElementById("icon");
const slidebar = document.querySelector(".slidebar");
const spans = document.querySelectorAll("span");
const menu = document.querySelector(".menu");
const main = document.querySelector("main");

menu.addEventListener("click", () => {
  slidebar.classList.toggle("max-slidebar");
  if (slidebar.classList.contains("max-slidebar")) {
    menu.children[0].style.display = "none";
    menu.children[1].style.display = "block";
  } else {
    menu.children[0].style.display = "block";
    menu.children[1].style.display = "none";
  }
  if (window.innerWidth <= 320) {
    slidebar.classList.add("mini-slidebar");
    main.classList.add("min-main");
    spans.forEach((span) => {
      span.classList.add("oculto");
    });
  }
});

icon.addEventListener("click", () => {
  slidebar.classList.toggle("mini-slidebar");
  main.classList.toggle("min-main");
  spans.forEach((span) => {
    span.classList.toggle("oculto");
  });
});
