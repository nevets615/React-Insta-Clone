import React from 'react';
import './SearchBar.css';
import instalogo from './instalogo.png';

const SearchBar = props => {
 
    return (
        <div className="searchBar">
            <img src="instalogo.png"/>
            <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
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





