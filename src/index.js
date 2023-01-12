const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

let count = 0;
number.innerText = count;

// number를 업데이트하는 함수
const updateText = () => {
  number.innerText = count;
};
const handleAdd = () => {
  // count = count + 1;
  count++;
  updateText();
};
const handleMinus = () => {
  // count = count - 1;
  count--;
  updateText();
};

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);