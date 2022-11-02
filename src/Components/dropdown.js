import React, { useState } from "react";
import "../Components/dropdown.css";
import fleche from "../Assets/fleche-bas.svg";

function Dropdown({titre, description}) {
   /* Hook */
    const [ouvert, setOuvert] = useState(false);

    return(
        <div className="dropdown" id={`about-${titre}`}>
            <div className="header-dropdown">
                <div className="titre-dropdown">{titre}</div>
                <span className={`fleche-dropdown ${ouvert}`} onClick={() => setOuvert(!ouvert)}>
                    <img src={fleche} alt="Ouvrir cette liste"/>
                </span>
                </div>
        {
         /* Si true > description */
        ouvert && <div className="description-dropdown">{description}</div>
        }
        </div>
    );
}

export default Dropdown;