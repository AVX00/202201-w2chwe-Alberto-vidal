class Cell {
  isAlive = false;
  positionX = 0;
  positionY = 0;
  neighbours;

  constructor(x, y, neighboursArray) {
    this.positionX = x;
    this.positionY = y;
    this.neighbours = neighboursArray;
  }
}

describe("Given an array of 3 alive cells", () => {
  describe("When they pass to the next generation", () => {
    test("Then the middle one should be the only one that survives", () => {});
  });
});
