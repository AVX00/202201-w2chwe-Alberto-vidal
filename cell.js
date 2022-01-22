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
