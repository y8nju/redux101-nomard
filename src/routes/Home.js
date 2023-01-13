import React, { useState } from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";

function Home({toDos, addToDo}) {
    const [text, setText] = useState("");
    
    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        setText("");
        addToDo(text);
        console.log(text);
    }

    return (<>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>ADD</button>
        </form>
        <ul>
            {JSON.stringify(toDos)}
        </ul>
    </>)
}

function mapStateToProps(state) {
    return {toDos: state}
}
function mapDispatchToProps(dispatch) {
    return {
        addToDo: (text) => dispatch(actionCreators.addToDo(text))
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (Home);