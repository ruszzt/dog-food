import React, {useState, useEffect, useContext} from "react";
import {useParams, Link, useNavigate, Navigate} from "react-router-dom";
import Review from "../components/Review/review";
import Ctx from "../Ctx";
import {Trash3, Star, StarFill, Truck} from "react-bootstrap-icons";



export default ({likes, _id}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const {api, PATH, user, setGoods, setBasket, basket} = useContext(Ctx);
   


    useEffect(() => {
        api.getProduct(id)
                .then(res => res.json())
                .then(data => {
                    setProduct(data);
                })
    })

    const btnSt = {
        position: "absolute",
        right: "20px",
        top: "120px",
        cursor: "pointer",
        height: "auto"
    }

    const remove = () => {
        api.delProduct(id)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (!data.error) {
                    setGoods(prev => prev.filter(g => g._id !== data._id))
                    navigate(`/catalog`);
                }
            })
    }
 
    function disc(a, b) {
        if (a > 0) {
            return b-b*a/100;
        } else {
            return b;
        }    
    }


/*------------------------------------------------------------- */
const setLikes = (n) => {

    let starses = [];

    for (let i = 0; i < n; i++) {
        starses.push(<StarFill key={i}/>);
    }
    for (let i = starses.length; i < 5; i++) {
        starses.push(<Star key={i}/>);
    }
    return starses;
}


const buy = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setBasket(prev => {
        const test = prev.filter(el => el.id === _id)
        if (test.length) {
            return prev.map(el => {
                if (el.id === _id) {
                    el.cnt++;
                }
                return el;
            })
        } else {
            return [...prev, {id: _id, cnt: 1}]
        }
    })
}



    return <>

        

        {product && product.author && product.author._id === user._id && <button onClick={remove} className="btn" style={btnSt}><Trash3/></button>}
        <h1>{product.name || "???????????????? ????????????"}</h1>
        <p>?????????????? {id}</p>
        
        <div className="prod">
        <Link to="/catalog" className="prod_back">??????????</Link>
            <div className="product_title">
                <div className="product_view">
                    <img className="product_pic" src={product.pictures} alt={product.name} />
                    <span>{disc(product.discount, product.price)} ???</span>
                    <span>???????????? {product.discount} %</span>
                    <button className="prod_btn" onClick={buy}>?? ??????????????</button>
                    <div className="rater">{setLikes(likes)}</div>
                    <p>????????????????</p>
                    
                    <div className="product_review">{product.description}Lorem, ipsum dolor sit amet consectetur adipisicing elit. At architecto ratione voluptatibus aut. Modi corporis nulla, magnam earum facere labore, animi quae quidem esse expedita quas minus omnis nesciunt sequi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi inventore illo rerum, laboriosam vel, vitae voluptatem mollitia, qui similique praesentium exercitationem esse quidem odio magnam ipsa iste aperiam sint iure! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto eligendi distinctio quae dolorem fugiat itaque quisquam quasi illo, minima eveniet voluptates tempora, cumque vitae blanditiis porro laudantium odio dicta nemo.</div>
                    <div className="prod_opt">
                        <h4>????????????????????????????</h4>
                        <p>??????: {product.wight}</p>
                        <p>????????????????????: {product.stock} ???? </p>
                    </div>
                </div>
                
                <div className="product_sale">
                    <div className="product_fav">
                        <Truck className="truck"/>
                        <h4 className="prod_fav_h">???????????????? ???? ?????????? ????????!</h4>
                        <p>???????????????? ???????????????? - ???? 399???</p>
                        <p>???????????????? ?? ?????????? ???????????? - ???? 199???</p>
                    </div>
                    <div className="prod_ads">
                        <a href="https://www.eukanuba.com/ru" target="_blank">
                            <img src="https://sun9-35.userapi.com/yBL8N6RqhGp2XL8fymHxYQMfo7GryiTy8B2RMw/dxT2cem4Akg.jpg" alt="??????????????" className="prod_ban_ads"/>
                        </a>
                    </div>
                    <div>
                            <div class="photo-container-5">  
                                <a href="https://www.hillspet.ru/products/cat-food?utm_source=yandex&utm_medium=paidsearch&utm_campaign=hills-pet-nutrition-n/a&utm_content=aed_ru_ru_yandex_brand-ys_text-ads_na_several_na&utm_term=????????%20hills%20??????%20??????????#%7C847437031896569164" target="_blank">      
                                    <div className="photo-1">
                                        <img src="https://i.pinimg.com/originals/70/af/79/70af7987b23cfb44a9931af20f08b7e3.jpg" />
                                    </div>
                                </a>
                                <a href="https://www.proplan.ru/" target="_blank">
                                    <div className="photo-2">
                                        <img src="https://vplate.ru/images/article/orig/2021/10/vse-o-kormah-purina-pro-plan-dlya-sobak.jpg" />
                                    </div>
                                </a>
                            </div>
                    </div>
                </div>
            </div>
        </div>
        <h2>????????????</h2>
        <div className="reviews">
            {product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i}/>)}
        </div>
    </>
}