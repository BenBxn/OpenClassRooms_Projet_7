import React, { useState } from "react";
import "./carroussel.css";
import fleche from "../Assets/fleche-bas.svg";

function Carrousel({images}) {
    console.log(images)
    let [affichageImage, changementImage] = useState(0);
    let tableauImages = images.length;

    const imgPrecedente = () => {
        if(affichageImage === 0) {
            changementImage(tableauImages - 1);
        } else {
            changementImage(affichageImage - 1);
        }
        return(changementImage);
    };  

    const imgSuivante = () => {
        if(affichageImage === tableauImages - 1) {
            changementImage(tableauImages = 0);
        } else {
            changementImage(affichageImage + 1);
        }
        return(changementImage);
    };

    return(
        <div className="block-carrousel">
            <div className="carrousel-image">


            {
                tableauImages > 1 && <img className="fleche fleche-gauche" src={fleche} alt="Contenu précedént" onClick={imgPrecedente}/>
            }
            {
                images.map((image, index) => {
                    return(
                        <img key={index} className={index === affichageImage ? 'carrousel-photo actif' : 'carrousel-photo'} src={image} alt="Logement"/>
                    )
                })
            }
            {
                tableauImages > 1 && <img className="fleche fleche-droite" src={fleche} alt="Contenu suivant" onClick={imgSuivante}/>
            }
            </div>
        </div>
    );
}

export default Carrousel;