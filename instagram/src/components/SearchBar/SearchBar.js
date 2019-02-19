import React from 'react';
import './SearchBar.css';
const SearchBar = props => {
   
    return (
        <div className="searchBar">
            <img src="SearchBar/instalogo.png"/>
            <div>
        <input type="text" placeholder="Search" />
      </div>
      <div className= "icons">
      <p>#</p>
      <p>#</p>
      <p>#</p>
      </div>
        </div>
    );
}

export default SearchBar;





