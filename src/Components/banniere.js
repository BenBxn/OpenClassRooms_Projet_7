import React from "react";
import "./banniere.css";

function Banniere({image}) {
    return(
        <img className="banniere" src={image} alt="banniere"/>
    );
}

export default Banniere;