import React, {useState, useEffect} from "react";
import {Routes, Route, Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import AddForm from "./pages/AddForm";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import Favorites from "./pages/Favorites";
import Fake from "./pages/Fake";
import Basket from "./pages/Basket";
import Ctx from "./Ctx";
import {Api} from "./Api";




const smiles = ["-_-", "0_0", ":D", "@_@"];

const PATH = "/";
// const PATH = "/dog-food/";

const App = () => {
    let usr = localStorage.getItem("ruszzt");
    if (usr) {
        usr = JSON.parse(usr);
    }
    const [user, setUser] = useState(usr);
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);
    const [visibleGoods, setVisibleGoods] = useState(goods);
    const [authors, setAuthors] = useState([]);
    const [favorites, setFavorites] = useState([]);
    const [basket, setBasket] = useState(localStorage.getItem("basket8") ? JSON.parse(localStorage.getItem("basket8")) : []);

    useEffect(() => {
        setApi(new Api(token));
        let usr = localStorage.getItem("ruszzt");
        if (usr) {
            usr = JSON.parse(usr);
        }
        setUser(usr);
    }, [token]);

    useEffect(() => {
        if (token) {
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setVisibleGoods(data.products);
                    setGoods(data.products);
                })
        }
    }, [api]);

    useEffect(() => {
        if (token) {
            api.getProducts()
                .then(res => res.json())
                .then(data => {
                    setGoods(data.products);
                })
            api.getUsers()
                .then(res => res.json())
                .then(data => {
                    setAuthors(data);
            })
        }
    }, []);
    
    useEffect(() => {
        if (!user) {
            localStorage.removeItem("token8");
            setToken(null);
        }
    }, [user]);

    useEffect(() => {
        setFavorites(goods.filter(el => {
            return el.likes && el.likes.includes(user._id);
        }))
    }, [goods]);

    useEffect(() => {
        localStorage.setItem("basket8", JSON.stringify(basket));
    }, [basket]);



    return (
        <Ctx.Provider value={{
            user: user,
            token: token,
            api: api,
            modalActive: modalActive,
            goods: goods,
            visibleGoods: visibleGoods,
            favorites: favorites,
            setUser: setUser,
            setToken: setToken,
            setApi: setApi,
            setModalActive: setModalActive,
            setGoods: setGoods,
            setVisibleGoods: setVisibleGoods,
            setFavorites: setFavorites,
            basket,
            setBasket,
            authors,
        }}>
            <div className="wrapper">
                <Header/>
                <main>
                    <Routes>
                        <Route path="/" element={<Home data={smiles}/>}/>
                        <Route path="/catalog" element={<Catalog data={smiles}/>}/>
                        <Route path="/profile" element={<Profile/>}/>
                        <Route path="/catalog/:id" element={<Product/>}/>
                        <Route path="/add" element={<AddForm/>}/>
                        <Route path="/favorites" element={<Favorites/>}/>
                        <Route path="/basket" element={<Basket/>}/>
                        <Route path="/fake/:n/:title" element={<Fake/>}/>
                    </Routes>
                </main>
                <Footer/>
            </div>
            <Modal/>
        </Ctx.Provider>
    )
}

export default App;