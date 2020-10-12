const redSelector = document.querySelector("#red");
const greenSelector = document.querySelector("#green");
const blueSelector = document.querySelector("#blue");

const circleDiv = document.querySelector("#color-circle");

const span = document.querySelector("#rgb-text");

function setColor() {
  document.querySelector("#numbers-red").value = redSelector.value;
  document.querySelector("#numbers-green").value = greenSelector.value;
  document.querySelector("#numbers-blue").value = blueSelector.value;

  circleDiv.style.backgroundColor = `rgb(${redSelector.value}, ${greenSelector.value}, ${blueSelector.value}`;

  span.textContent = `Red: ${redSelector.value} Green: ${greenSelector.value} Blue: ${blueSelector.value}`;
}

redSelector.addEventListener("input", setColor);
greenSelector.addEventListener("input", setColor);
blueSelector.addEventListener("input", setColor);
