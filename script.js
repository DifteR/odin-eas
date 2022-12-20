let divContainer = document.getElementById("div-container");
let idFinder;
let size;
let fields = [];

function drawDivs(size) {
  divContainer.replaceChildren();
  for (let i = 0; i < size; i++) {
    for (let j = 0; j <= size; j++) {
      var gridElement = document.createElement("div");
      gridElement.className = "grid-element";
      gridElement.addEventListener("mouseenter", function (e) {
        e.target.style.backgroundColor = "black";
      });
      divContainer.appendChild(gridElement);
    }
    var newBreak = document.createElement("div");
    gridElement.className = "break";
  }
}

drawDivs(16);

document
  .getElementById("grid-size")
  .addEventListener("click", () => drawDivs(prompt()));
