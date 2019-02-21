import React from 'react';
import dummyData from './components/dummy-data'
import SearchBar from './components/SearchBar/SearchBar'
import PostContainer from './components/PostContainer/PostContainer'
import './App.css';

class App extends React.Component {
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
      <PostContainer data={this.state.data} />
    </div>
    );
  }
}

export default App;
