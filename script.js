/* COPYRIGHT (C) 2024 - SWATHYMOL SAJEEV | GNU General Public License v3.0

This program is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, 
either version 3 of the License, or (at your option) any later version. This program is distributed in the hope that it will be useful,but WITHOUT ANY WARRANTY; 
without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this program.  If not, see <https://www.gnu.org/licenses/>. */

document.addEventListener("DOMContentLoaded", function () {
  const redInput = document.getElementById("red");
  const greenInput = document.getElementById("green");
  const blueInput = document.getElementById("blue");

  const redValueSpan = document.getElementById("redValue");
  const greenValueSpan = document.getElementById("greenValue");
  const blueValueSpan = document.getElementById("blueValue");

  const colorDisplay = document.querySelector(".color-display");

  const copyButton = document.getElementById("copyButton");

  const inputTypeRGBValue = document.getElementById("inputType");

  redInput.addEventListener("input", updateColor);
  greenInput.addEventListener("input", updateColor);
  blueInput.addEventListener("input", updateColor);

  updateColor();

  function updateColor() {
    const red = redInput.value;
    const green = greenInput.value;
    const blue = blueInput.value;

    const color = `rgb(${red}, ${green}, ${blue})`;

    colorDisplay.style.backgroundColor = color;

    redValueSpan.textContent = red;
    greenValueSpan.textContent = green;
    blueValueSpan.textContent = blue;

    inputTypeRGBValue.textContent = color;
  }

  copyButton.addEventListener("click", copyToClipboard);

  function copyToClipboard() {
    const textToCopy = `rgb(${redInput.value}, ${greenInput.value}%, ${blueInput.value}%)`;

    navigator.clipboard
      .writeText(textToCopy)
      .then(function () {
        alert("The color is copied to clipboard");
      })
      .catch(function (err) {
        console.error("Unable to copy the data", err);
      });
  }
});