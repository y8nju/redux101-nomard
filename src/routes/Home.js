import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";

function Home() {
    const [text, setText] = useState("");
    const toDos = useSelector((state) => state);
    const dispatch = useDispatch();
    const { addToDo } = actionCreators;
    
    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        setText("");
        dispatch(addToDo(text));
        console.log(text);
    }

    return (<>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>ADD</button>
        </form>
        <ul>
            {toDos.map(toDo => (
                <ToDo {...toDo} key={toDo.id} />
            ))}
        </ul>
    </>)
}

export default Home;