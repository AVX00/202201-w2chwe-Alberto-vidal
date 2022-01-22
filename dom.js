// eslint-disable-next-line import/extensions
import { generateVillage, greetTheNeighbours } from "./cell.mjs";

const table = document.getElementById("table");

console.log(table, greetTheNeighbours(generateVillage(3, 3)));
