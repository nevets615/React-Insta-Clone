import React from "react";
import dummyData from "./components/PostContainer/dummy-data"
import "./App.css";
import Authenticate from "./components/Authentication/authenticate";
import Login from "./components/Login/Login";
import PostsPage from "./components/PostContainer/PostsPage";
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

const WithAuthenticate = Authenticate(PostsPage)(Login);

export default App;
