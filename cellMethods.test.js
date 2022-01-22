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

function generateRow() {
  const row = [];
  const rowSize = 3;
  for (let actiualCell = 0; actiualCell < rowSize; actiualCell++) {
    const cell = new Cell(0, 0);
    row.push(cell);
  }
  return row;
}

function greetTheNeighbours(row) {
  let previousCell;
  for (const cell of row) {
    if (previousCell instanceof Cell && previousCell.isAlive) {
      cell.aliveNeighbours++;
    }
    if (cell.isAlive && previousCell instanceof Cell) {
      previousCell.aliveNeighbours++;
    }
    previousCell = cell;
  }
}

describe("Given an array of 3 alive cells", () => {
  describe("When they pass to the next generation", () => {
    test("Then the middle one should be the only one that survives", () => {
      const row = generateRow();
      const initialRow = generateRow().map((cell) => {
        cell.revive();
        return cell;
      });

      const expectedResult = row;
      expectedResult[0].die();
      expectedResult[2].die();
      expectedResult[1].revive();
      expectedResult[0].aliveNeighbours = 1;
      expectedResult[2].aliveNeighbours = 1;
      greetTheNeighbours(initialRow);

      const resultantRow = initialRow.map((cell) => {
        cell.nextGen();
        return cell;
      });
      greetTheNeighbours(resultantRow);
      console.log(expectedResult);
      expect(resultantRow).toEqual(expectedResult);
    });
  });
});
