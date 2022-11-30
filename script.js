let divContainer = document.getElementById("div-container");
for (let i = 0; i < 256; i++) {
  divContainer.innerHTML += `<div class='field'></div>`;
}

const containers = document.querySelectorAll(".field");

containers.forEach((f) =>
  f.addEventListener("mouseenter", function () {
    console.log(f);
    containers.forEach((e) => {
      var div = e.querySelector("div");
      div.classList.add("hidden");
      div.classList.remove("show");
    });
    this.querySelector("div").classList.add("black-div");
  })
);

/*const fields = document.getElementsByClassName("field");
console.log(fields);

fields.forEach((f) => {
  f.addEventListener("mouseenter", function () {
    var div = f.querySelector("div");
    f.classList.add("black-div");
  });
});
*/
