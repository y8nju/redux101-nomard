const { createStore } = require("redux");


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

number.innerText = 0;

const countModifier = (count = 0, action) => {
  console.log(count, action)
  if (action.type === "ADD") {
    return count + 1
  } else if (action.type === "MINUS") {
    return count - 1
  } else {
    return count;
  }
  // eslint-disable-next-line default-case
  // switch(action.type) {
  //   case "ADD":
  //     return count + 1;
  //   case "MINUS": 
  //     return count - 1;
  // }
  // return count;
}

// store: 데이터 저장
const countStore = createStore(countModifier);

const onChange = () => {
  number.innerText = countStore.getState();
};

// subscribe: store 안에 있는 변화들을 알 수 있다
countStore.subscribe(onChange);

const handleAdd = () => {
  countStore.dispatch({type: "ADD"});

};
const handleMinus = () => {
  countStore.dispatch({type: "MINUS"});
}

add.addEventListener("click", handleAdd);
minus.addEventListener("click", handleMinus);