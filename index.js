const btn = document.querySelector("#btn");
// cREATE GAME BOARD

// Images Trump
let trumpImage = document.createElement("img");
trumpImage.setAttribute(
  "src",
  "https://upload.wikimedia.org/wikipedia/commons/5/56/Donald_Trump_official_portrait.jpg"
);
trumpImage.classList.add("trumpstyle", "trump");

let singleLi = document.querySelectorAll(".trumpdiv ul li");
let listLength = document.querySelector(".trumpdiv ul").querySelectorAll("li")
  .length;
const trumpDiv = document.querySelector(".trumpdiv");

function renderOne(i) { 
  // 0 , 1, 2
  console.log(i);
  singleLi[i].appendChild(trumpImage)
}

function createImages() {
  for (let i = 0; i < listLength; i++) {
    console.log(singleLi[i]);
    // singleLi[i].appendChild(trumpImage);
    renderOne(i) // new scope -- function scope
  }
}

btn.addEventListener("click", () => {
  createImages();
});
