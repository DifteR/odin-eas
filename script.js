let divElement = document.createElement("div");
let divContainer = document.getElementById("div-container");
for (let i = 0; i < 256; i++) {
  divContainer.innerHTML += "<div class='field'></div>";
}
