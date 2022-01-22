import { generateVillage, greetTheNeighbours } from "./cell.mjs";

const village = generateVillage(30, 30);
greetTheNeighbours(village);
console.log(village);
