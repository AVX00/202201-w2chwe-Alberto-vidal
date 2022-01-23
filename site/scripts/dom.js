// eslint-disable-next-line import/extensions
// import { generateVillage, greetTheNeighbours } from "./cell.mjs";

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
  const cell = document.createElement("div");
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

function createCells(board) {
  const numberOfCells = getNumberOfCells(board);
  for (let x = 0; x < numberOfCells[0]; x++) {
    for (let y = 0; y < numberOfCells[1]; y++) {
      board.appendChild(bornCell(x, y));
    }
  }
  const cellSize = getCellSize(board, numberOfCells);
  console.log(cellSize);
  document.querySelectorAll(".cell").forEach((cell) => {
    cell.setAttribute(
      "style",
      `width: ${cellSize[0]}px; height: ${cellSize[1]}px;`
    );
    // cell.addEventListener("click");s
  });
}

createCells(table);
