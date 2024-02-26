document.addEventListener("DOMContentLoaded", function() {
  const redRange = document.getElementById("redRange");
  const greenRange = document.getElementById("greenRange");
  const blueRange = document.getElementById("blueRange");
  const redInput = document.getElementById("redInput");
  const greenInput = document.getElementById("greenInput");
  const blueInput = document.getElementById("blueInput");
  const colorPicker = document.getElementById("colorPicker");
  const colorBox = document.getElementById("colorBox");
  const hexCode = document.getElementById("hexCode");

  function updateColor() {
    const red = redInput.value || redRange.value;
    const green = greenInput.value || greenRange.value;
    const blue = blueInput.value || blueRange.value;

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;
    const hexColor = rgbToHex(red, green, blue);

    colorBox.style.backgroundColor = rgbColor;
    hexCode.textContent = `Código Hexadecimal: ${hexColor}`;
  }

  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }

  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }

  redRange.addEventListener("input", function() {
    redInput.value = redRange.value;
    updateColor();
  });
  greenRange.addEventListener("input", function() {
    greenInput.value = greenRange.value;
    updateColor();
  });
  blueRange.addEventListener("input", function() {
    blueInput.value = blueRange.value;
    updateColor();
  });

  redInput.addEventListener("input", function() {
    redRange.value = redInput.value;
    updateColor();
  });
  greenInput.addEventListener("input", function() {
    greenRange.value = greenInput.value;
    updateColor();
  });
  blueInput.addEventListener("input", function() {
    blueRange.value = blueInput.value;
    updateColor();
  });

  colorPicker.addEventListener("input", function() {
    const hexColor = colorPicker.value;
    const rgbColor = hexToRgb(hexColor);
    redInput.value = rgbColor.r;
    greenInput.value = rgbColor.g;
    blueInput.value = rgbColor.b;

    updateColor();
  });

  updateColor();
});

function hexToRgb(hex) {
  const bigint = parseInt(hex.substring(1), 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return { r, g, b };
}
