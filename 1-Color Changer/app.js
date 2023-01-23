const COLORS = ["red", "salmon", "black", "aqua", "beige", "purple", "blue"];
let body = document.querySelector("body");
let changeButton = document.querySelector(".changeBtn");
let previousNum = -1;

function ChangeColor() {
  let randomNum = Math.floor(Math.random() * COLORS.length);

  if (randomNum != previousNum) {
    previousNum = randomNum;
    document.body.style.backgroundColor = COLORS[randomNum];
  } else {
    ChangeColor();
  }
}

changeButton.addEventListener("click", ChangeColor);
