class Cell {
  isAlive = false;
  aliveNeighbors = 0;
  positionX = 0;
  positionY = 0;

  constructor(x, y) {
    this.positionX = x;
    this.positionY = y;
  }

  nextGen() {
    switch (this.isAlive) {
      case true:
        if (this.aliveNeighbors > 3 || this.aliveNeighbors < 2) {
          this.die();
        }
        break;

      default:
        if (this.aliveNeighbors === 3) {
          this.revive();
        }
        break;
    }
    this.aliveNeighbors = 0;
  }

  die() {
    this.isAlive = false;
  }

  revive() {
    this.isAlive = true;
  }
}

function generateStreet(cellsInTheStreet, acutalStreet) {
  const row = [];
  for (let actualCell = 0; actualCell < cellsInTheStreet; actualCell++) {
    const cell = new Cell(acutalStreet, actualCell);
    row.push(cell);
  }
  return row;
}

function checkNeighborsTopLeft(cell, village) {
  for (let x = cell.positionX; x <= cell.positionX + 1; x++) {
    for (let y = cell.positionY; y <= cell.positionY + 1; y++) {
      if (village[x][y].isAlive && village[x][y] !== cell) {
        cell.aliveNeighbors++;
      }
    }
  }
}
function checkNeighborsTopmidle(cell, village) {
  for (let x = cell.positionX; x <= cell.positionX + 1; x++) {
    for (let y = cell.positionY - 1; y <= cell.positionY + 1; y++) {
      if (village[x][y].isAlive && village[x][y] !== cell) {
        cell.aliveNeighbors++;
      }
    }
  }
}
function checkNeighborsTopRight(cell, village) {
  for (let x = cell.positionX; x <= cell.positionX + 1; x++) {
    for (let y = cell.positionY - 1; y <= cell.positionY; y++) {
      if (village[x][y].isAlive && village[x][y] !== cell) {
        cell.aliveNeighbors++;
      }
    }
  }
}
function checkNeighborsMiddleLeft(cell, village) {
  for (let x = cell.positionX - 1; x <= cell.positionX + 1; x++) {
    for (let y = cell.positionY; y <= cell.positionY + 1; y++) {
      if (village[x][y].isAlive && village[x][y] !== cell) {
        cell.aliveNeighbors++;
      }
    }
  }
}
function checkNeighborsMidleMiddle(cell, village) {
  for (let x = cell.positionX - 1; x <= cell.positionX + 1; x++) {
    for (let y = cell.positionY - 1; y <= cell.positionY + 1; y++) {
      if (village[x][y].isAlive && village[x][y] !== cell) {
        cell.aliveNeighbors++;
      }
    }
  }
}
function checkNeighborsMiddleRight(cell, village) {
  for (let x = cell.positionX - 1; x <= cell.positionX + 1; x++) {
    for (let y = cell.positionY - 1; y <= cell.positionY; y++) {
      if (village[x][y].isAlive && village[x][y] !== cell) {
        cell.aliveNeighbors++;
      }
    }
  }
}
function checkNeighborsBottomLeft(cell, village) {
  for (let x = cell.positionX - 1; x <= cell.positionX; x++) {
    for (let y = cell.positionY; y <= cell.positionY + 1; y++) {
      if (village[x][y].isAlive && village[x][y] !== cell) {
        cell.aliveNeighbors++;
      }
    }
  }
}
function checkNeighborsBottomMiddle(cell, village) {
  for (let x = cell.positionX - 1; x <= cell.positionX; x++) {
    for (let y = cell.positionY - 1; y <= cell.positionY + 1; y++) {
      if (village[x][y].isAlive && village[x][y] !== cell) {
        cell.aliveNeighbors++;
      }
    }
  }
}
function checkNeighborsBottomRight(cell, village) {
  for (let x = cell.positionX - 1; x <= cell.positionX; x++) {
    for (let y = cell.positionY - 1; y <= cell.positionY; y++) {
      if (village[x][y].isAlive && village[x][y] !== cell) {
        cell.aliveNeighbors++;
      }
    }
  }
}

export function greetTheNeighbors(village) {
  for (const street of village) {
    for (const cell of street) {
      if (cell.positionX === 0 && cell.positionY === 0) {
        checkNeighborsTopLeft(cell, village);
      } else if (
        cell.positionX === 0 &&
        cell.positionY !== 0 &&
        cell.positionY !== street.length - 1
      ) {
        checkNeighborsTopmidle(cell, village);
      } else if (cell.positionX === 0 && cell.positionY === street.length - 1) {
        checkNeighborsTopRight(cell, village);
      } else if (
        cell.positionX !== 0 &&
        cell.positionX !== village.length - 1 &&
        cell.positionY === 0
      ) {
        checkNeighborsMiddleLeft(cell, village);
      } else if (
        cell.positionX !== 0 &&
        cell.positionX !== village.length - 1 &&
        cell.positionY !== 0 &&
        cell.positionY !== street.length - 1
      ) {
        checkNeighborsMidleMiddle(cell, village);
      } else if (
        cell.positionX !== 0 &&
        cell.positionX !== village.length - 1 &&
        cell.positionY === street.length - 1
      ) {
        checkNeighborsMiddleRight(cell, village);
      } else if (
        cell.positionX === village.length - 1 &&
        cell.positionY === 0
      ) {
        checkNeighborsBottomLeft(cell, village);
      } else if (
        cell.positionX === village.length - 1 &&
        cell.positionY !== 0 &&
        cell.positionY !== street.length - 1
      ) {
        checkNeighborsBottomMiddle(cell, village);
      } else if (
        cell.positionX === village.length - 1 &&
        cell.positionY === street.length - 1
      ) {
        checkNeighborsBottomRight(cell, village);
      }
    }
  }
}

export function generateVillage(streetsX, streetsY) {
  const village = [];
  for (let acutalStreet = 0; acutalStreet < streetsX; acutalStreet++) {
    village.push(generateStreet(streetsY, acutalStreet));
  }
  return village;
}
