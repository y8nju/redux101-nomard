const { createStore } = require("redux");


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0) => {
  // count++;
  // count--;
  return count;
}

const countStore = createStore(countModifier);