import React from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";

export default function Home() {

  const [ loadingState, setLoadingState] = React.useState(false);
  const [ searchTermState, setSearchTermState ] = React.useState("a");
  const [ cocktailsState, setCocktailsState ] = React.useState([]);

  React.useEffect(() => {
    getCocktails(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTermState}`);
  },[searchTermState]);

  async function getCocktails(search) {
    setLoadingState(true);

    try {

      const response = await fetch(search).then( data => data.json() );
      const { drinks } = response;

      if ( drinks ) {

        const coctailsDataFormated = drinks.map( item => {
            const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass, strInstructions } = item;
          return {
            id: idDrink,
            name: strDrink,
            imageUrl: strDrinkThumb,
            isAlcoholic: strAlcoholic,
            instructions: strInstructions,
            glass: strGlass
          }
        }); 

        setCocktailsState(coctailsDataFormated);

      } else {
        setCocktailsState([]);
      }

      
    } catch (err) {
      console.error('ERROR FROM FETCH: ', err);
    }

    setLoadingState(false);

  }

  console.log(searchTermState, cocktailsState);

  return (
    <main>
      <SearchForm searchTerm={setSearchTermState} />
      <CocktailList loading={loadingState} cocktails={cocktailsState} />
    </main>
  );
}
