import React, {useContext} from "react";
import {Star, StarFill} from "react-bootstrap-icons";
import Ctx from "../../Ctx";
import "./review.css";

export default ({author, rating, created_at,text}) => {

    const {authors} = useContext(Ctx);
    const person = authors.filter(a => a._id === author)[0];

    const setRating = (n) => {

        let stars = [];

        for (let i = 0; i < n; i++) {
            stars.push(<StarFill key={i}/>);
        }
        for (let i = stars.length; i < 5; i++) {
            stars.push(<Star key={i}/>);
        }
        return stars;
    }
    return <>
    <div className="revi_card">
        <h3 className="person">{person && person.name || ""}</h3>
        <div className="rate">{setRating(rating)}</div>
        <div className="text">{text}</div>
        <div className="rev_date">{new Date(created_at).toLocaleString()}</div>
    </div>
    
    </>
}