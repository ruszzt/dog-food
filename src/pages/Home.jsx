import React, { useContext } from "react";
import Card from "../components/Card";
import Ads from "../components/Ads/ads";
import Ctx from "../Ctx";
import {Link} from "react-router-dom";

export default ({data}) => {

    // const {PATH} = useContext(Ctx);

    return <>
        <h1>Главная страница</h1>
        <Link to="/catalog">Перейти в каталог</Link>
        <Ads/>
        <h3>Хиты</h3>
        <div className="cards">
            {data.map((el, i) => <Card key={"card_" + i} text={el} like={(i + 1) % 2 === 0}/>)}
        </div>
    </>
}