import React, {useContext} from "react";
import {useNavigate} from "react-router-dom";
import Ctx from "../Ctx";

export default () => {
    const {user, setUser} = useContext(Ctx);
    const navigate = useNavigate();

    const logOut = (e) => {
        e.preventDefault();
        setUser("");
        localStorage.removeItem("ruszzt");
        navigate("/");
    }
    return <>
        <h1>Личный кабинет</h1>
        <p>Привет, {user}</p>
        <a href="" onClick={logOut} style={{color: "orange"}}>Выйти из аккаунта</a>
    </>
}