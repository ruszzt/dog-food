import React, {useContext} from "react";
import {Link} from "react-router-dom";
import "./header.css";
import Search from "../Search/search";
import Ctx from "../../Ctx";

export default ({goods, searchGoods, setModalActive}) => {

    const {user, setUser} = useContext(Ctx);
    const logIn = (e) => {
        e.preventDefault();
        setModalActive(prev => !prev);
    }

    const logOut = (e) => {
        e.preventDefault();
        localStorage.removeItem("ruszzt");
        setUser("");
    }

    return (
        <header>
            <Link className="logo" to="/">DogFood</Link>
            <Search data={goods} searchGoods={searchGoods}/>
            <nav className="menu">
                {user && <Link to="/profile">{user}</Link>}
                {!user && <a href="" onClick={logIn}>Войти</a>}
                {user && <a href="" onClick={logOut}>Выйти</a>}
            </nav>
        </header>
    )
}