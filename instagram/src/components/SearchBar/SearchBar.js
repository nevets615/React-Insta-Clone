import React from 'react';
import './SearchBar.css';
import compass from './compass.png'
import heart from './heart.png'
import person from './person.png'
import instalogo from './instalogo.png'

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
     this.state = {}
  }
 
  render() {
    return (
        <div className="searchBar">
            <img src={instalogo} alt =""/>
            <form>
          <formGroup>
            <input 
              type='search'
              name='search'
              id='exampleSearch'
              onChange={this.props.searchPosts}
              placeholder='🔍 Search'
            />
          </formGroup>
        </form>
      <div className="searchBar-icons">
        <img src={compass} alt =""/>
        <img src={heart} alt= "heart" />
        <img src={person} alt= "user" />
      </div>
        </div>
    );
}
}
export default SearchBar;





