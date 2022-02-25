const Stack = require("./Stack");
const Queue = require("./Queue");
const Dijkstra = require("./Dijkstra");

module.exports = {
  Stack,
  Queue,
  Dijkstra,
};

const d = new Dijkstra([
  //0, 1, 2, 3, 4
  [0, 3, 2, 0, 5], // 0
  [3, 0, 1, 0, 0], // 1
  [2, 1, 0, 9, 0], // 2
  [0, 0, 9, 0, 1], // 3
  [5, 0, 0, 1, 0], // 4
]);

console.log(d.calculate(2, 4));
