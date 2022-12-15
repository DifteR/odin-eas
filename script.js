let divContainer = document.getElementById("div-container");
let idFinder;
let fields = [];
for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
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
