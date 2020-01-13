import React from "react";
import { Link } from "react-router-dom";

export default function Cocktail({id, name, isAlcoholic, instructions, imageUrl, glass}) {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={imageUrl} alt={name}/>
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <p>{instructions}</p>
        <strong>{isAlcoholic}</strong>
        <Link style={{float: 'right'}} className="btn btn-primary btn-details" to={`/cocktail/${id}`}>Get More</Link>
      </div>
    </article>
  );
}
