import React, {useState, useEffect, useContext} from "react";
import {useParams, Link, useNavigate, Navigate} from "react-router-dom";
import Review from "../components/Review/review";
import Ctx from "../Ctx";
import {Trash3} from "react-bootstrap-icons";

export default ({}) => {
    const {id} = useParams();
    const [product, setProduct] = useState({});
    const navigate = useNavigate();
    const {api, PATH, user, setGoods} = useContext(Ctx);

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

    return <>
        {product && product.author && product.author._id === user._id && <button onClick={remove} className="btn" style={btnSt}><Trash3/></button>}
        <h1>{product.name || "Страница товара"}</h1>
        <p>{id}</p>
        <Link to="/catalog">Назад</Link>
        <h2>Отзывы</h2>
        <div className="reviews">
            {product.reviews && product.reviews.length > 0 && product.reviews.map((el, i) => <Review {...el} key={i}/>)}
        </div>
    </>
}