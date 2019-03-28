import React from "react";

import "./App.css";
import Authenticate from "./components/Authentication/authenticate";
import Login from './components/login/Login';
import Posts from "./components/PostContainer/PostsView";
class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <WithAuthenticate />
      </div>
    );
  }
}

const WithAuthenticate = Authenticate(Login)(Posts);

export default App;