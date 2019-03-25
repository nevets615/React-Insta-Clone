import React from 'react';
import './SearchBar.css';
import compass from './compass'
import heart from './heart'
import person from './person'
import instalogo from './instalogo'
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
     this.state = {}
  }
 
  render() {
    return (
        <div className="searchBar">
            <img src={instalogo.png}/>
            <Form>
          <FormGroup>
            <Input 
              type='search'
              name='search'
              id='exampleSearch'
              onChange={this.props.searchPosts}
              placeholder='🔍 Search'
            />
          </FormGroup>
        </Form>
      <div className="searchBar-icons">
        <img src={compass} />
        <img src={heart} alt= "heart"/>
        <img src={person} alt= "user"/>
      </div>
        </div>
    );
}
}
export default SearchBar;





