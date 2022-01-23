// eslint-disable-next-line import/extensions
import { generateVillage, greetTheNeighbors } from "./cell.mjs";

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
  cell.setAttribute("id", `cell-${x}-${y}`);
  cell.setAttribute("class", "cell cell--dead");
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

function toggleCell(tableCell, cell) {
  if (cell.isAlive) {
    cell.die();
    tableCell.className = "cell cell--dead";
  } else {
    cell.revive();
    tableCell.className = "cell cell--alive";
  }
}

function createCells() {
  const board = document.getElementById("table");
  board.innerHTML = "";
  const chart = document.createElement("table");
  const numberOfCells = getNumberOfCells(board);
  const cellSize = getCellSize(board, numberOfCells);
  const village = generateVillage(numberOfCells[1], numberOfCells[0]);
  greetTheNeighbors(village);
  for (let x = 0; x < numberOfCells[1]; x++) {
    const row = document.createElement("tr");
    for (let y = 0; y < numberOfCells[0]; y++) {
      const cell = bornCell(x, y);
      cell.setAttribute(
        "style",
        `width: ${cellSize[0]}px; height: ${cellSize[1]}px;`
      );
      cell.addEventListener("mousedown", () => {
        toggleCell(cell, village[x][y]);
      });
      row.appendChild(cell);
    }
    chart.appendChild(row);
  }
  board.appendChild(chart);
}

createCells();

window.onresize = () => {
  setTimeout(() => {
    createCells();
  }, 300);
};
