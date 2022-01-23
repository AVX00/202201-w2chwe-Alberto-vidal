// eslint-disable-next-line import/extensions
import { generateVillage, greetTheNeighbors } from "./cell.mjs";

let playing = false;

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

function createCells() {
  const info = {};
  const link = [];
  const board = document.getElementById("table");
  board.innerHTML = "";
  const chart = document.createElement("table");
  const numberOfCells = getNumberOfCells(board);
  const cellSize = getCellSize(board, numberOfCells);
  const village = generateVillage(numberOfCells[1], numberOfCells[0]);
  for (let x = 0; x < numberOfCells[1]; x++) {
    const row = document.createElement("tr");
    for (let y = 0; y < numberOfCells[0]; y++) {
      const cell = bornCell(x, y);
      cell.setAttribute(
        "style",
        `width: ${cellSize[0]}px; height: ${cellSize[1]}px;`
      );
      cell.className = "cell cell--dead";

      row.appendChild(cell);
      link.push({
        tableCell: cell,
        villager: village[x][y],
      });
    }
    chart.appendChild(row);
  }
  board.appendChild(chart);
  info.link = link;
  info.village = village;
  return info;
}

function addOnclick(dayInfo) {
  for (const cell of dayInfo) {
    cell.tableCell.addEventListener("click", () => {
      if (cell.tableCell.className === "cell cell--dead") {
        cell.tableCell.className = "cell cell--alive";
        cell.villager.isAlive = true;
      } else {
        cell.tableCell.className = "cell cell--dead";
        cell.villager.isAlive = false;
      }
    });
  }
}

function firstDay() {
  const dayInfo = createCells();
  console.log(dayInfo);
  addOnclick(dayInfo.link);

  return dayInfo;
}

function nextDay(info) {
  for (const cell of info.link) {
    if (
      cell.tableCell.className === "cell cell--dead" &&
      cell.villager.isAlive
    ) {
      cell.tableCell.className = "cell cell--alive";
    } else if (
      cell.tableCell.className === "cell cell--alive" &&
      !cell.villager.isAlive
    ) {
      cell.tableCell.className = "cell cell--dead";
    }
  }
  greetTheNeighbors(info.village);
  for (const cell of info.link) {
    cell.villager.nextGen();
  }
}

function stepsAutomation(dayInfo) {
  while (playing) {
    setInterval(() => {
      nextDay(dayInfo);
    }, 500);
  }
}

function main() {
  const button = document.getElementById("start");
  let dayInfo = firstDay();
  button.addEventListener("click", () => {
    if (playing) {
      playing = false;
    } else {
      playing = true;
      stepsAutomation(dayInfo);
    }
  });

  window.onresize = () => {
    setTimeout(() => {
      dayInfo = firstDay();
    }, 1000);
  };
}

main();
