import React from "react";
import "./cards.css";

function Cards({id, image, titre}) {
    return(
        <div className="cards" id={id}>
            <div className="gradients"></div>

            <img className="card-image" src={image} alt="card logement"/>

            <span className="card-titre">{titre}</span>
        </div>
    );
}

export default Cards;