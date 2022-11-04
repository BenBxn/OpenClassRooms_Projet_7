import React from "react";
import "./tags.css";

function Tag({nom}) {
    return(
        <span className="tag">{nom}</span>
    );
}

export default Tag;