window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");

  btn.addEventListener("click", function () {
    const rgbColor = generateRGBColor();
    root.style.backgroundColor = rgbColor;
  });
}

//generate RGB Color
function generateRGBColor() {
  const red = Math.floor(Math.random() * 255);
  const gree = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `rgb(${red}, ${gree}, ${blue})`;
}