import React from "react";
import "./header.css";

export default () => {
    let user = localStorage.getItem("ruszzt")

    const logIn = (e) => {
        e.preventDefault();
        let name = prompt("Ваше имя");
        if (name) {
            localStorage.setItem("ruszzt", name);
            user = name;
        }
    }

    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("ruszzt");
    }

    return (
        <header>
            <a className="logo" href="">DogFood</a>
            <input type="search" placeholder="Поиск" className="search"/>
            <nav className="menu">
                {user && <a href="">{user}</a>}
                {!user && <a href="" onClick={logIn}>Войти</a>}
                {user && <a href="" onClick={logOut}>Выйти</a>}
            </nav>
        </header>
    )
}