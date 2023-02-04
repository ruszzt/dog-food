import React from "react";
import "./style.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import Card from "./components/Card";

const smiles = ["-_-", "0_0", ":D", "=*", "@_@", "=)"];

const App = () => {
    return (
        <div className="container">
            <Header/>
            <main>
                <h1>Главная страница</h1>
                <div className="cards">
                    {smiles.map((el, i) => <Card key={"card_" + i} text={el} like={(i + 1) % 2 === 0}/>)}
                    {/* {smiles.map((el, i) => <span key={i}>{el}</span>)} */}
                    {/* {smiles} */}
                    {/* <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/> */}
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default App;