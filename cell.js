class Cell {
  isAlive = false;
  aliveNeighbours = 0;
  positionX = 0;
  positionY = 0;

  constructor(x, y) {
    this.positionX = x;
    this.positionY = y;
  }

  nextGen() {
    switch (this.isAlive) {
      case true:
        if (this.aliveNeighbours > 3 || this.aliveNeighbours < 2) {
          this.die();
        }
        break;

      default:
        if (this.aliveNeighbours === 3) {
          this.revive();
        }
        break;
    }
    this.aliveNeighbours = 0;
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
  for (
    let actualCell = 0;
    actualCell < cellsInTheStreet;
    actualCell++
  ) {
    const cell = new Cell(acutalStreet, actualCell);
    row.push(cell);
  }
  return row;
}

function greetTheNeighbours(village) {
  for (const street of village) {
    for (const cell of street) {
      if (cell.positionX === 0 && cell.positionY === 0) {
        for (let x = cell.positionX; x <= cell.positionX + 1; x++) {
          for (let y = cell.positionY; y <= cell.positionY + 1; y++) {
            if (village[x][y].isAlive && village[x][y]!== cell) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX === 0 &&
        cell.positionY !== 0 &&
        cell.positionY !== street.length - 1
      ) {
        for (let x = cell.positionX; x <= cell.positionX + 1; x++) {
          for (let y = cell.positionY - 1; y <= cell.positionY + 1; y++) {
            if (village[x][y].isAlive && village[x][y]!== cell) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (cell.positionX === 0 && cell.positionY === street.length - 1) {
        for (let x = cell.positionX; x <= cell.positionX + 1; x++) {
          for (let y = cell.positionY - 1; y <= cell.positionY; y++) {
            if (village[x][y].isAlive && village[x][y]!== cell) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX !== 0 &&
        cell.positionX !== village.length - 1 &&
        cell.positionY === 0
      ) {
        for (let x = cell.positionX - 1; x <= cell.positionX + 1; x++) {
          for (let y = cell.positionY; y <= cell.positionY + 1; y++) {
            if (village[x][y].isAlive && village[x][y]!== cell) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX !== 0 &&
        cell.positionX !== village.length - 1 &&
        cell.positionY !== 0 &&
        cell.positionY !== street.length - 1
      ) {
        for (let x = cell.positionX - 1; x <= cell.positionX + 1; x++) {
          for (let y = cell.positionY - 1; y <= cell.positionY + 1; y++) {
            if (village[x][y].isAlive && village[x][y]!== cell) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX !== 0 &&
        cell.positionX !== village.length - 1 &&
        cell.positionY === street.length -1
      ) {
        for (let x = cell.positionX - 1; x <= cell.positionX + 1; x++) {
          for (let y = cell.positionY - 1; y <= cell.positionY; y++) {
            if (village[x][y].isAlive && village[x][y]!== cell) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX === village.length - 1 &&
        cell.positionY === 0
      ) {
        for (let x = cell.positionX - 1; x <= cell.positionX; x++) {
          for (let y = cell.positionY; y <= cell.positionY + 1; y++) {
            if (village[x][y].isAlive && village[x][y]!== cell) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX === village.length - 1 &&
        cell.positionY !== 0 &&
        cell.positionY !== street.length - 1
      ) {
        for (let x = cell.positionX - 1; x <= cell.positionX; x++) {
          for (let y = cell.positionY - 1; y <= cell.positionY + 1; y++) {
            if (village[x][y].isAlive && village[x][y]!== cell) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX === village.length - 1 &&
        cell.positionY === street.length - 1
      ) {
        for (let x = cell.positionX - 1; x <= cell.positionX; x++) {
          for (let y = cell.positionY - 1; y <= cell.positionY; y++) {
            if (village[x][y].isAlive && village[x][y]!== cell) {
              cell.aliveNeighbours++;
            }
          }
        }
      }
    }
  }
}

function generateVillage(streetsX, streetsY) {
  const village = [];
  for (let acutalStreet = 0; acutalStreet < streetsX; acutalStreet++) {
    village.push(generateStreet(streetsY, acutalStreet));
  }
  return village;
}
