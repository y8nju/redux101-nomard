import React, { useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

function Home({todos}) {
    console.log(todos)
    const [text, setText] = useState("");
    // const todo = useSelector((state) => state);
    // const dispatch = useDispatch();
    // console.log(todo);
    
    function onChange(e) {
        setText(e.target.value)
    }

    function onSubmit(e) {
        e.preventDefault();
        setText("");
        console.log(text);
    }

    return (<>
        <h1>To Do</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={text} onChange={onChange} />
            <button>ADD</button>
        </form>
        <ul></ul>
    </>)
}

function mapStateToProps(state) {
    return {toDos: state}
}
export default connect(mapStateToProps) (Home);
// export default Home;