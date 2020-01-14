import React from "react";

export default function SearchForm({setSearchTermState}) {

  const searchValue = React.useRef("");

  React.useEffect(() => {
    searchValue.current.focus();
  },[]);


  function handleFormSubmit(e) {
    e.preventDefault();
  }

  function searchCocktail() {
    setSearchTermState(searchValue.current.value);
  }

  return (
    <section className="section">
      <h2 className="section-title">Search Cocktails</h2>
      <form onSubmit={handleFormSubmit}className="form search-form">
        <div className="form-control">
          <label htmlFor="name">search for your favorite cocktail</label>
          <input 
            ref={searchValue} 
            type="text" 
            name="name" 
            id="name" 
            onChange={searchCocktail}
          />
        </div>
      </form>
    </section>
    );
}
