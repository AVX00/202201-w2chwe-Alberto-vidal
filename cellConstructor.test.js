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

describe("Given a cell class", () => {
  describe("When it's constructor is called", () => {
    test("Then it should return an object with: isAlive, positionX, positionY", () => {
      const expectiedObject = {
        isAlive: false,
        positionX: 0,
        positionY: 0,
      };

      const returnedObject = new Cell(0, 0);

      expect(expectiedObject).toEqual(returnedObject);
    });
  });

  describe("When it's constructor is called with parameters x= 4 and y = 5 ", () => {
    test("Then it should return an object with: isAlive = false, positionX = 4, positionY = 5", () => {
      const x = 4;
      const y = 5;
      const expectiedObject = {
        isAlive: false,
        positionX: 4,
        positionY: 5,
      };

      const returnedObject = new Cell(x, y);

      expect(expectiedObject).toEqual(returnedObject);
    });
  });

  describe("When it's constructor is called with parameters x= 4 and y = 5 and passed an array of neighbours", () => {
    test("Then it should return an object with: isAlive = false, positionX = 4, positionY = 5 and an array of neighbours", () => {
      const neighboursArray = () => {
        for (let i = 0; i < 3; i++) {
          this.push(
            new Cell(
              Math.floor(Math.random() * 10),
              Math.floor(Math.random() * 10)
            )
          );
        }
      };
      const x = 4;
      const y = 5;
      const expectiedObject = {
        isAlive: false,
        positionX: 4,
        positionY: 5,
        neighbours: neighboursArray,
      };

      const returnedObject = new Cell(x, y, neighboursArray);

      expect(expectiedObject).toEqual(returnedObject);
    });
  });
});
