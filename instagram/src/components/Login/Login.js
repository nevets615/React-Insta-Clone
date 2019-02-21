import React from "react";
import ReactDOM from "react-dom";
import withConditionalRender from "./components/withConditionalRender";
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";

import "./styles.css";

class App extends React.Component {
  state = {
    inputText: ""
  };

  handleChanges = e => this.setState({ inputText: e.target.value });

  signIn = e => {
    e.preventDefault();
    localStorage.setItem("user", this.state.inputText);
    window.location.reload();
  };

  render() {
    return (
      <div className="App">
        <input
          type="text"
          value={this.state.inputText}
          onChange={this.handleChanges}
        />
        <button onClick={this.signIn}>Sign in</button>
      </div>
    );
  }
}
export default Login;
