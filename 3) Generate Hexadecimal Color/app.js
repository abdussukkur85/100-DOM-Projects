window.onload = () => {
  main();
};

function main() {
  const root = document.getElementById("root");
  const btn = document.getElementById("change-btn");
  const copyBtn = document.getElementById("copy-btn");
  const input = document.getElementById("input-text");

  btn.addEventListener("click", function () {
    const hexColor = generateHexColor();
    root.style.backgroundColor = hexColor;
    input.value = hexColor;
  });

  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(input.value);
  });
}

//generate HEX Color
function generateHexColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`;
}
