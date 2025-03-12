import { Component } from "react";
import Logo from "./Logo";

class Student extends Component {
  constructor(props) {
    super(props);
    this.state = { year: 0, color: "black", speed: 1, visible: true };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    const newYear = new Date().getFullYear() - nextProps.age;
    console.log(newYear);
    if (newYear === prevState.year) {
      return null;
    } else {
      return { year: newYear };
    }
  }

  componentDidMount() {
    console.log("Component mounted");
    setTimeout(() => {
      this.setState({ color: "red" });
    }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return true;
    // if (nextProps.name.length > 3) {
    //   return true;
    // } else {
    //   return false;
    // }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    return prevProps.name;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log(snapshot);
    // if (this.props.name !== this.state.speed) {
    //   console.log("name is not equal to speed");
    //   this.setState({ speed: this.props.name });
    // } else {
    //   console.log("name is equal to speed");
    // }
  }

  removeHandler = () => {
    this.setState({ visible: false });
  };

  render() {
    const { name, age } = this.props;
    return (
      <div style={{ backgroundColor: this.state.color }}>
        {this.state.visible && <Logo animationDuration={this.state.speed} />}
        <h2>Name - {name} </h2>
        <h2>Age - {age} </h2>
        <h2>Year - {this.state.year} </h2>
        <input type="button" value="Remove Logo" onClick={this.removeHandler} />
      </div>
    );
  }
}

export default Student;
