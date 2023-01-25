const hexCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
const changeBtn = document.querySelector(".change-btn");
const hexText = document.querySelector(".hex-text");

function CreateHexColor() {
  let hexValue = "#";
  for (let i = 0; i < 6; i++) {
    hexValue += hexCharacters[Math.floor(Math.random() * hexCharacters.length)];
  }
  return hexValue;
}

changeBtn.addEventListener("click", () => {
  let hexVal = CreateHexColor();
  document.body.style.backgroundColor = hexVal;
  hexText.innerHTML = `HEX VALUE :${hexVal}`;
});
