import React, {useState, useEffect} from "react";
import {Routes, Route} from "react-router-dom";
import "./style.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import products from "./assets/data.json";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";
import Modal from "./components/Modal";
import Profile from "./pages/Profile";
import Product from "./pages/Product";
import {Api} from "./Api";



const smiles = ["-_-", "0_0", ":D", "=*", "@_@", "=)"];

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("ruszzt"));
    const [token, setToken] = useState(localStorage.getItem("token8"));
    const [modalActive, setModalActive] = useState(false);
    const [api, setApi] = useState(new Api(token));
    const [goods, setGoods] = useState([]);

    useEffect(() => {
        setApi(new Api(token));
        setUser(localStorage.getItem("ruszzt"));
    }, [token]);

    useEffect(() => {
        if (token) {
            api.getProducts()
                .then(res => res.json())
                .then(data => {
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
        }
    }, []);
    
    useEffect(() => {
        if (!user) {
            localStorage.removeItem("token8");
            setToken(null);
        }
    }, [user]);

    return (
        <>
            <div className="container">
                <Header 
                    user={user} 
                    setUser={setUser} 
                    products={products} 
                    setModalActive={setModalActive}
                />
                <main>
                    <Routes>
                        <Route path="/" element={<Home data={smiles}/>}/>
                        <Route path="/catalog" element={<Catalog data={goods}/>}/>
                        <Route path="/profile" element={<Profile setUser={setUser} user={user}/>}/>
                        <Route path="/catalog/:id" element={<Product/>}/>
                    </Routes>
                    {/* {user ? <Catalog data={goods}/> : <Home data={smiles}/>} */}
                </main>
                <Footer/>
            </div>
            <Modal isActive={modalActive} setState={setModalActive} api={api} setToken={setToken}/>
        </>
    )
}

export default App;