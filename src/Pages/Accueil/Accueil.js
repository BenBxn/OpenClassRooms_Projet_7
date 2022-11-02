import React from "react";

import "./Accueil.css";
import Banniere from "../../Components/banniere"
import banniereAccueil from "../../Assets/BanniereAcceuil.png";


function Accueil() {
    return(
    <div>
        <Banniere image={banniereAccueil} />
        <h1>Kasa</h1>
        <p>Chez vous, partout et ailleurs</p>
    </div>
    );
}

export default Accueil;