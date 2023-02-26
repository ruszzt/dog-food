import React, {useContext} from "react";
import Card from "../components/Card";
import Ads from "../components/Ads/ads";
import Ctx from "../Ctx";
import {Link} from "react-router-dom";

export default () => {

    const {PATH, goods, api, id, pictures, name, price} = useContext(Ctx);
    
    

    return <>
        <h1 className="homeP">Главная страница</h1>
        <Link to="/catalog" className="prod_back">Перейти в каталог</Link>
        <Ads/>
        <h3>Хиты</h3>
        <div className="cards">
            {/* {goods.map((el, i) => <Card key={"card_" + i} {...el}/>)} */}
            <Link to="./catalog/622c779c77d63f6e70967d1c">
                <div className="cart">
                    <img src="https://react-learning.ru/image-compressed/1.jpg" alt="Желудки утиные сушено-вяленые" style={{height: "100px", cursor: "pointer"}} />
                    <p className="cart_p">Желудки утиные сушено-вяленые</p>
                    <h6>4500 ₽</h6>
                </div>
            </Link>
            <Link to="./catalog/622c77c377d63f6e70967d1d">
                <div className="cart">
                    <img src="https://react-learning.ru/image-compressed/2.jpg" alt="Куриная круrля" style= {{height: "100px", cursor: "pointer"}}/>
                    <p className="cart_p">Куриная круrля</p>
                    <h6>6000 ₽</h6>
                </div>
            </Link>
            <Link to="./catalog/622c77cc77d63f6e70967d1e">
                <div className="cart">
                    <img src="https://react-learning.ru/image-compressed/3.jpg" alt="Ломтики крольчатины" style={{height: "100px", cursor: "pointer"}}/>
                    <p className="cart_p">Ломтики крольчатины</p>
                    <h6>500 ₽</h6>
                </div>
            </Link>
            <Link to="./catalog/622c77d477d63f6e70967d1f">
                <div className="cart">
                    <img src="https://react-learning.ru/image-compressed/4.jpg" alt="Мелкая говяжья жилка" style={{height: "100px", cursor: "pointer"}}/>
                    <p className="cart_p">Мелкая говяжья сушено-вяленая жилка</p>
                    <h6>300 ₽</h6>
                </div>
            </Link>
        </div>
        <div className="home_ads">
            <div>
                <a href="https://www.purina.ru/" target="_blank">
                    <img src="https://dv.zoopassage.ru/upload/iblock/bca/bcaa337e032738a8ec4575728707fbc2.jpg" alt="реклама" className="home_ads_ban"/>
                </a>
            </div>
            <div>
                <a href="https://www.bethowen.ru/search/?q=royal%20canin?utm_source=yandex&utm_medium=cpc&utm_campaign=y-rw-vendors-korma-rf-search_royalcanin&utm_term=royal%20canin&utm_content=pid-43114872550-rid-43114872550-cid-82754572-gbid-5123758284-aid-13416316919-cgid-0-mt--an--atid-43114872550-mk--aph-no-apht-none-st-search-src-none-pt-premium-pst-1-device-desktop-crid-0-regid-9-regn-Липецк-iid-&etext=&yclid=847489322653635701" target="_blank">
                    <img src="https://st15.stblizko.ru/images/news/000/492/679_original.png" alt="реклама" className="home_ads_ban"/>
                </a>
            </div>
        </div>
    </>
}
