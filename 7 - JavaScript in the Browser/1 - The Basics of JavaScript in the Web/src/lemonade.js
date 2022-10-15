//import fs from "fs";
// console.log("Hello World!");
// console.log(document);

let lemonJuiceLabel = document.getElementById("lemonJuiceLabel");
console.log(lemonJuiceLabel);
lemonJuiceLabel.innerHTML = "<p> Hello </p>";

// function example(string) {
//   console.log(string);
// }

const example = (string) => {
  console.log(string);
};

let incrementButton = document.getElementById("incrementButton");

console.log(incrementButton);

// incrementButton.addEventListener("click", () => example("Hello World"));

incrementButton.addEventListener("click", () =>
  alert("Increment Button Clicked")
);

window.addEventListener("click", () => alert("Window Clicked"));

document.addEventListener("click", () => alert("Document Clicked"));

document
  .getElementById("p1")
  .addEventListener("click", () => alert("P1 clicked"));
document
  .getElementById("p2")
  .addEventListener("click", () => alert("P2 clicked"));
document
  .getElementById("p3")
  .addEventListener("click", () => alert("P3 clicked"));
document
  .getElementById("p4")
  .addEventListener("click", () => alert("P4 clicked"));
document
  .getElementById("p5")
  .addEventListener("click", () => alert("P5 clicked"));
document
  .getElementById("p6")
  .addEventListener("click", () => alert("P6 clicked"));
