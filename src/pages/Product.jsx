import React, {useState, useEffect} from "react";
import {useParams, Link} from "react-router-dom";

export default () => {
    const {id} = useParams();
    const [product, setProduct] = useState({});

    let token = localStorage.getItem("token8");
    useEffect(() => {
        if (token) {
            fetch(`https://api.react-learning.ru/products/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                })
        }
    })

    return <>
        <h1>Страница товара</h1>
        <p>{id}</p>
        <Link to="/catalog">Назад</Link>
    </>
}