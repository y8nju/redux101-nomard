const { createStore } = require("redux");


const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = document.querySelector("span");

const countModifier = (count = 0, action) => {
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

countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "ADD"});
countStore.dispatch({type: "MINUS"});
console.log(countStore.getState());