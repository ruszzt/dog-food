import React, {useState, useContext} from "react";
import "./search.css";
import {useNavigate} from "react-router-dom";
import {ReactComponent as SearchImg} from "./img/magnifier.svg";
import {ReactComponent as CloseImg} from "./img/cross.svg";
import Ctx from "../../Ctx";

export default () => {

    const navigate = useNavigate();
    const {goods, setVisibleGoods, PATH} = useContext(Ctx);
    const [text, updateText] = useState("");
    const [searchData, setSearchData] = useState(goods);

    const clearSearch = () => {
        updateText("");
        setSearchData(goods);
        setVisibleGoods(goods);
    }
    const search = (e) => {
        navigate("/catalog");
        updateText(e.target.value);
        let arr = goods.filter(el => el.name.toLowerCase().includes(e.target.value.toLowerCase()));
        setSearchData(arr);
        setVisibleGoods(arr);
    }

    return <div className="search-block">
        <input placeholder="Поиск..." value={text} onChange={search} maxLength="50"/>
        <button>{text ? <CloseImg onClick={clearSearch}/> : <SearchImg/>}</button>
        {text && <div className="search-result">По запросу <b>{text}</b>&nbsp; {searchData.length > 0 ? `найдено ${searchData.length} товаров` : "не найдено ни одного товара"}
        </div>}
    </div>
}