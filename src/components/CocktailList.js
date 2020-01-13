import React from "react";
import Cocktail from "./Cocktail";

export default function CocktailList({loading, cocktails}) {

  const showCocktailList = cocktails => {
    return cocktails.map( item => (
      <Cocktail key={item.id} {...item} />
    ));
  }

  const loadingMessage = <h1 className="section-title">Getting your drinks now...</h1>;
  const noDrinksMessage = <h2 className="section-title">Umm... Sorry... No drinks for you!</h2>;
  const drinksFoundMessage = <h1 className="section-title">Here are your drinks.</h1>;

  if ( loading ) {
    return loadingMessage;
  } else {
    return (
      <section className="section">
        { cocktails.length > 0 ?  drinksFoundMessage : noDrinksMessage}
        { cocktails.length > 0 && <div className="cocktails-center">{showCocktailList(cocktails)}</div> }
      </section>
    );
  }
  
}
