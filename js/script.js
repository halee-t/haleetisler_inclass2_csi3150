const showA = document.getElementById("show-a");
const hideA = document.getElementById("hide-a");

const showB = document.getElementById("show-b");
const hideB = document.getElementById("hide-b");

const showC = document.getElementById("show-c");
const hideC = document.getElementById("hide-c");

showA.addEventListener("click", () => {
  document.getElementById("card-a").style.visibility = "visible";
});

showB.addEventListener("click", () => {
  document.getElementById("card-b").style.visibility = "visible";
});

showC.addEventListener("click", () => {
  document.getElementById("card-c").style.visibility = "visible";
});

hideA.addEventListener("click", () => {
  document.getElementById("card-a").style.visibility = "hidden";
});

hideB.addEventListener("click", () => {
  document.getElementById("card-b").style.visibility = "hidden";
});

hideC.addEventListener("click", () => {
  document.getElementById("card-c").style.visibility = "hidden";
});
