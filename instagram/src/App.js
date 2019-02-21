import React, { Component } from 'react';
import './App.css';
import PostPage from './components/PostContainer/PostPage';
import LoginPage from './components/Login/Login';
import authenticate from './components/Authentication/authenticate';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <ToShow />
      </div>
    );
  }
}

const ToShow = withConditionalRender(FirstComponent)(SecondComponent);

export default App;
