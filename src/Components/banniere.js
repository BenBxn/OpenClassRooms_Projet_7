import React from "react";
import "./banniere.css";

function Banniere({image, texte}) {
    return(
        <div className="block-banniere">
        <img className="banniere" src={image} alt="banniere"/>
        <span className="texte-accueil">{texte}</span>
        </div>
    );
}

export default Banniere;