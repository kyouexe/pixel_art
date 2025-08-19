function makeGrid() {
  const gridSize = document.getElementById("gridSize").value;
  const pixelCanvas = document.getElementById("pixelCanvas");

  pixelCanvas.innerHTML = ""; // Clear old grid
  pixelCanvas.style.gridTemplateColumns = `repeat(${gridSize}, 20px)`;
  pixelCanvas.style.gridTemplateRows = `repeat(${gridSize}, 20px)`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");

    cell.addEventListener("click", function () {
      const color = document.getElementById("colorPicker").value;
      cell.style.backgroundColor = color;
    });

    pixelCanvas.appendChild(cell);
  }
}

function clearGrid() {
  const cells = document.querySelectorAll(".cell");
  cells.forEach(cell => (cell.style.backgroundColor = ""));
}

// Generate default grid on page load
document.addEventListener("DOMContentLoaded", makeGrid);
