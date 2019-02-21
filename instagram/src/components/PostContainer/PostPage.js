import React, { Component } from 'react';
import dummyData from './dummy-data';
import PostsContainer from './PostContainer';
import SearchBar from '../SearchBar/SearchBar';

class PostsPage extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      filteredData: []
    };
  }
  componentDidMount() {
    this.setState({ data: dummyData });
  }

  searchDataHandler = e => {
    const data = this.state.data.filter(p => {
      if (p.username.includes(e.target.value)) {
        return p;
      }
    });
    this.setState({ filteredData: data });
  };
  render() {
    return (
      <div className="App">
        <SearchBar
          searchTerm={this.state.searchTerm}
          searchData={this.searchDataHandler}
        />
        <PostsContainer
          data={
            this.state.filteredData.length > 0
              ? this.state.filteredData
              : this.state.data
          }
        />
      </div>
    );
  }
}

export default PostsPage;