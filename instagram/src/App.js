import React from 'react';
import SearchBar from './components/PostContainer/PostContainer';
import PostContainer from './components/PostContainer/PostContainer';
import dummyData from './dummy-data'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      searchData: []
    }
  }

  componentDidMount() {
    this.setState({
      posts: dummyData
    })
  }

  searchBarHandler = event => {
    const posts = this.state.posts.filter( post => {
      if (post.username.includes(event.target.value)) {
        return post
      }
    });
    this.setState({
      searchData: posts
    })
  }

  render() {
    return (
      <div className="App">
        <SearchBar searchPosts={this.searchBarHandler}/>
        <PostContainer posts={
          this.state.searchData.length > 0 ?
          this.state.searchData :
          this.state.posts}/>

      </div>
    );
  }
}

export default App;