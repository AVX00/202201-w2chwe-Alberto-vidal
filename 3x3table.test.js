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

function generateStreet(street) {
  const row = [];
  const rowSize = 3;
  for (let actiualCell = 0; actiualCell < rowSize; actiualCell++) {
    const cell = new Cell(actiualCell, street);
    row.push(cell);
  }
  return row;
}

function greetTheNeighbours(village) {
  for (const street of village) {
    for (const cell of street) {
      if (cell.positionX === 0 && cell.positionY === 0) {
        for (let x = cell.positionX; x < cell.positionX + 1; x++) {
          for (let y = cell.positionY; y < cell.positionY + 1; y++) {
            if (village[x][y].isAlive) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX === 0 &&
        cell.positionY !== 0 &&
        cell.positionY !== street.length - 1
      ) {
        for (let x = cell.positionX; x < cell.positionX + 1; x++) {
          for (let y = cell.positionY - 1; y < cell.positionY + 1; y++) {
            if (village[x][y].isAlive) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (cell.positionX === 0 && cell.positionY === street.length - 1) {
        for (let x = cell.positionX; x < cell.positionX + 1; x++) {
          for (let y = cell.positionY - 1; y < cell.positionY; y++) {
            if (village[x][y].isAlive) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX !== 0 &&
        cell.positionX !== village.length - 1 &&
        cell.positionY === 0
      ) {
        for (let x = cell.positionX - 1; x < cell.positionX + 1; x++) {
          for (let y = cell.positionY; y < cell.positionY + 1; y++) {
            if (village[x][y].isAlive) {
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
        for (let x = cell.positionX - 1; x < cell.positionX + 1; x++) {
          for (let y = cell.positionY - 1; y < cell.positionY + 1; y++) {
            if (village[x][y].isAlive) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX !== 0 &&
        cell.positionX !== village.length - 1 &&
        cell.positionY === street.length
      ) {
        for (let x = cell.positionX - 1; x < cell.positionX + 1; x++) {
          for (let y = cell.positionY - 1; y < cell.positionY; y++) {
            if (village[x][y].isAlive) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX === village.length - 1 &&
        cell.positionY === 0
      ) {
        for (let x = cell.positionX - 1; x < cell.positionX; x++) {
          for (let y = cell.positionY; y < cell.positionY + 1; y++) {
            if (village[x][y].isAlive) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX === village.length - 1 &&
        cell.positionY !== 0 &&
        cell.positionY !== street.length - 1
      ) {
        for (let x = cell.positionX - 1; x < cell.positionX; x++) {
          for (let y = cell.positionY - 1; y < cell.positionY + 1; y++) {
            if (village[x][y].isAlive) {
              cell.aliveNeighbours++;
            }
          }
        }
      } else if (
        cell.positionX === village.length - 1 &&
        cell.positionY === street.length - 1
      ) {
        for (let x = cell.positionX - 1; x < cell.positionX; x++) {
          for (let y = cell.positionY - 1; y < cell.positionY; y++) {
            if (village[x][y].isAlive) {
              cell.aliveNeighbours++;
            }
          }
        }
      }
    }
  }
}
function generateVillage() {
  const village = [];
  const numberOfStreets = 3;
  for (let acutalStreet = 0; acutalStreet < numberOfStreets; acutalStreet++) {
    village.push(generateStreet(acutalStreet));
  }
  return village;
}

test("logs", () => {
  const village = generateVillage();
  village[1][2].revive();
  village[2][1].revive();
  village[1][0].revive();
  greetTheNeighbours(village);
  console.log(village);
});
