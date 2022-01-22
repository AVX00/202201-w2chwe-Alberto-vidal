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
