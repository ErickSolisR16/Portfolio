var check = document.querySelector(".check");

check.addEventListener("click", language);

function language() {
  let id = check.checked;

  if (id == true) {
    location.href = "../en/index.html";
  } else {
    location.href = "../index.html";
  }
}
