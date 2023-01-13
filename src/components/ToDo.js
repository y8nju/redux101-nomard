import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { actionCreators } from "../store";

function ToDo({text, id}) {
    const dispatch = useDispatch();
    const { deleteToDo } = actionCreators;

    function onBtnClick() {
        dispatch(deleteToDo(id))
    }

    return (<li>
        <Link to={`${id}`}>
            {text}
        </Link>
        <button onClick={onBtnClick}>DEL</button>
    </li>)
}

export default ToDo;