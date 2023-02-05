import React, {useState} from "react";
import "./style.css";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import products from "./assets/data.json";
import Home from "./pages/Home.jsx";
import Catalog from "./pages/Catalog.jsx";

const smiles = ["-_-", "0_0", ":D", "=*", "@_@", "=)"];

const App = () => {
    const [user, setUser] = useState(localStorage.getItem("ruszzt"));
    return (
        <div className="container">
            <Header user={user} setUser={setUser}/>
            <main>
                {user ? <Catalog data={products}/> : <Home data={smiles}/>}
            </main>
            <Footer/>
        </div>
    )
}

export default App;