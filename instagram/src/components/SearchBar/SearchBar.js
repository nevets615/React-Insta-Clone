import React from 'react';
import './SearchBar.css';
import compass from './compass'
import heart from './heart'
import person from './person'
import instalogo from './instalogo'
const SearchBar = props => {
 
    return (
        <div className="searchBar">
            <img src={instalogo.png}/>
            <div>
        <input type="text" placeholder="Search" onKeyDown={props.searchPosts} />
      </div>
      <div className="searchBar-icons">
        <img src={compass} />
        <img src={heart} alt= "heart"/>
        <img src={person} alt= "user"/>
      </div>
        </div>
    );
}

export default SearchBar;





