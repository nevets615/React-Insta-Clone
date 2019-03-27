import React from "react";

import "./App.css";
import Authenticate from "./components/Authentication/authenticate";
import Login from "./components/Login/Login";
import Posts from "./components/PostContainer/Posts";
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

const WithAuthenticate = Authenticate(Posts)(Login);

export default App;