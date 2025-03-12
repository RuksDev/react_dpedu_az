import { Component } from "react";
import logo from "./logo.svg";

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    alert("Logo will be removed")
  }
  render() {
    return (
      <>
        <img
          src={logo}
          style={{ animationDuration: `${this.props.animationDuration}s` }}
          className="App-logo"
          alt="logo-2"
        ></img>
      </>
    );
  }
}

export default Logo;
