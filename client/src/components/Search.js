import React from "react"

function Search({searchTerm, onChangeSearch}) {

  function handleChange(event){
    return onChangeSearch(event.target.value)
  }

  return (
    
    <div className="wrap">
      <div className="searchbar">
            <label htmlFor="search">Search Records:</label>
            <input 
              className="searchTerm"
              width="500"
              type="text"
              id="search"
              placeholder="type..."
              value={searchTerm}
              onChange={handleChange}
          />
      </div>
      </div>
      
    );
  }
  
  export default Search;