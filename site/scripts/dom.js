// eslint-disable-next-line import/extensions
import { generateVillage, greetTheNeighbors } from "./cell.mjs";

const table = document.getElementById("table");

function getNumberOfCells(board) {
  const numberOfCells = [];
  numberOfCells.push(
    Math.floor(board.clientWidth / 20),
    Math.floor(board.clientHeight / 20)
  );
  return numberOfCells;
}

function bornCell(x, y) {
  const cell = document.createElement("td");
  cell.setAttribute("id", `cell${x}${y}`);
  cell.setAttribute("class", "cell");
  return cell;
}

function getCellSize(board, numberOfCells) {
  const cellSize = [];
  cellSize.push(
    board.clientWidth / numberOfCells[0],
    board.clientHeight / numberOfCells[1]
  );
  return cellSize;
}

function toggleCell(cell, cellSize) {
  cell.setAttribute(
    "style",
    `background-color: #000;width: ${cellSize[0]}px; height: ${cellSize[1]}px;`
  );
}

function createCells() {
  const board = document.getElementById("table");
  board.innerHTML = "";
  const chart = document.createElement("table");
  const numberOfCells = getNumberOfCells(board);
  for (let x = 0; x < numberOfCells[1]; x++) {
    const row = document.createElement("tr");
    for (let y = 0; y < numberOfCells[0]; y++) {
      row.appendChild(bornCell(x, y));
    }
    chart.appendChild(row);
  }
  board.appendChild(chart);
  const cellSize = getCellSize(board, numberOfCells);
  console.log(cellSize);
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.setAttribute(
      "style",
      `width: ${cellSize[0]}px; height: ${cellSize[1]}px;`
    );
    cell.addEventListener("mousedown", () => {
      toggleCell(cell, cellSize);
    });
  });

  const village = generateVillage(numberOfCells[1], numberOfCells[0]);
  greetTheNeighbors(village);
  console.log(village);
}

createCells(table);

window.onresize = () => {
  setTimeout(() => {
    createCells(table);
  }, 300);
};
