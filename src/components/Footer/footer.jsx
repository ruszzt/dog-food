import React from "react";
import "./footer.css";

export default () => {
    const year = new Date().getFullYear();
    return (
        <footer>
            <span className="footer__copy">©{year}</span>
            <span className="footer__text">created by React</span>
            <span>8 (800) 555 35 35</span>
        </footer>
    )
}