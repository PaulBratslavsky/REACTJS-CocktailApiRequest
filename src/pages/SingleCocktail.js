import React from "react";
import { useParams, Link } from 'react-router-dom';

export default function SingleCocktail() {

  const { id } = useParams();
  const [ loadingState, setLoadingState] = React.useState(false);
  const [ singleCocktailState, setSingleCocktailState ] = React.useState(null)

  React.useEffect( () => {
    const baseUrl = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";
    console.log(baseUrl,id)
    getSingleCocktail(baseUrl,id);
  },[id]);

  async function getSingleCocktail(baseUrl, searchId) {
    setLoadingState(true);

    try { 

      const response = await fetch(baseUrl + searchId).then( data => data.json() );
      const { drinks } = response;

      if ( drinks ) {

        const { 
          idDrink: id, 
          strDrink: name, 
          strCategory: category,
          strDrinkThumb: imageUrl, 
          strAlcoholic: isAlcoholic, 
          strGlass: glass, 
          strInstructions: instructions,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15  
        } = drinks[0];

        const ingrediens = [ 
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strIngredient9,
          strIngredient10,
          strIngredient11,
          strIngredient12,
          strIngredient13,
          strIngredient14,
          strIngredient15
        ]

        const coctailsDataFormated = {
          id,
          name,
          category,
          imageUrl,
          isAlcoholic,
          glass,
          instructions,
          ingrediens
        }
      
        setSingleCocktailState(coctailsDataFormated);
      
      } else {
        setSingleCocktailState(null);
      }
      
    } catch ( err ) {
      console.error("FETCH SINGLE DRINK FAIL: ");
    }

    setLoadingState(false);

  }

  const singleDrinkTemplate = (dataObject) => {

    if (dataObject) {
      console.log(dataObject, "DATA");
      
      return (
        <section className="section cocktail-section">
          <h2>{dataObject.name}</h2>
          
          <div className="drink">
            <img src={dataObject.imageUrl} alt={dataObject.name} />
            <div className="drink-info">
              <p>name: {dataObject.name}</p>
              <p>category: {dataObject.category}</p>
              <p>type: {dataObject.isAlcoholic}</p>
              <p>glass: {dataObject.glass}</p>
              <p>instructions: {dataObject.instructions}</p>
              <p>ingrediens</p>
              <ul>
            { dataObject.ingrediens.map( (item, index) => ( item ? <li key={index}>{item}</li> : null ))}
          </ul>
              <Link to="/" style={{float: 'right'}} className="btn btn-primary">Back Home</Link>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
          <h1 className="section-title">Ops... Something went wrong!</h1>
          <Link to="/" className="btn btn-primary">Try Again</Link>
        </section>
      );
    }
  }
  
  const loadingTemplate = <h1 className="section-title">Loading details...</h1>

return loadingState ? loadingTemplate : singleDrinkTemplate(singleCocktailState);

}


