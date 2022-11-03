import React from "react";

import "./Accueil.css";
import Banniere from "../../Components/banniere"
import banniereAccueil from "../../Assets/BanniereAcceuil.png";
import ListeLogements from "../../Assets/Logements.json";
import { NavLink } from "react-router-dom";
import Cards from "../../Components/cards";

function Accueil() {
    return(
        <div className="accueil">
            <div className="banniere-accueil">
            <Banniere image={banniereAccueil} texte="Chez vous, partout et ailleurs"/>
            </div>
            <div className="block-logements">
                {ListeLogements.map((logement) => 
                    <NavLink key={logement.id} to={"/logement/"+logement.id+"/#"}>
                        <Cards key={logement.id} id={logement.id} image={logement.cover} titre={logement.title} />
                    </NavLink>)}
            </div>
        </div>
    );
}

export default Accueil;