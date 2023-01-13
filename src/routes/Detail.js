import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { actionCreators } from "../store";

function Detail() {
    const params = useParams();
    const id = parseInt(params.id)
    // id type은 string으로 number로 변환하여 사용한다
    const navigate = useNavigate()
    const toDos = useSelector((state) => state);
    const toDo = toDos.find(toDo => toDo.id === id);
    const dispatch = useDispatch();
    const { deleteToDo } = actionCreators;

    function onBtnClick() {
        dispatch(deleteToDo(id));
        navigate("/");
        console.log(toDos)
    }

    return (<>
        <h1>{toDo?.text}</h1> 
        <button onClick={onBtnClick}>DEL</button>
        <h5>Created at: {toDo?.id}</h5>
    </>)
}

export default Detail;