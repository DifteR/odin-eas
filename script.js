let divContainer = document.getElementById("div-container");
let idFinder;
let fields = [];
for (let i = 0; i < 256; i++) {
  var gridElement = document.createElement("div");
  gridElement.className = "grid-element";
  gridElement.addEventListener("mouseenter", function (e) {
    e.target.style.backgroundColor = "black";
  });
  divContainer.appendChild(gridElement);
}
