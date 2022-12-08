let divContainer = document.getElementById("div-container");
let idFinder;
let fields = [];
for (let i = 0; i < 256; i++) {
  var gridElement = document.createElement('div');
  gridElement.className =  'grid-element';
  gridElement.addEventListener('mouseenter', function (e) {
    e.target.style.backgroundColor = 'black';
  })
  divContainer.appendChild(gridElement);
    /*divContainer.innerHTML += `<div id='field${i}' class='show'></div>`;
      idFinder = "field" + i;
        document.getElementById(idFinder).addEventListener("click", function () {
            console.log("here");
          
  /*divContainer.innerHTML += `<div id='field${i}' class='show'></div>`;
  idFinder = "field" + i;
  document.getElementById(idFinder).addEventListener("click", function () {
    console.log("here");
    idFinder.classList.add("show");
  })*/;
  //fields.push(document.getElementById(idFinder));
  //fields[i].addEventListener(
  //"mouseover",
  //console.log(i) //{
  //console.log("here");
  //fields[i].classList.add("hidden");
  //}
  //);
}

/*const containers = document.querySelectorAll(".field");

containers.forEach((f) =>
  f.addEventListener("mouseenter", function () {
    console.log(f);
    containers.forEach((e) => {
      var div = e.querySelector("div");
      console.log(div);
      div.classList.add("hidden");
      div.classList.remove("show");
    });
    this.querySelector("div").classList.add("black-div");
  })
);
*/
/*const fields = document.getElementsByClassName("field");
console.log(fields);

fields.forEach((f) => {
  f.addEventListener("mouseenter", function () {
    var div = f.querySelector("div");
    f.classList.add("black-div");
  });
});
*/
