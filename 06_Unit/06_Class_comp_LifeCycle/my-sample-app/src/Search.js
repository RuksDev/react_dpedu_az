import { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
    };
  }
  onSearch = (event) => {
    this.setState({ text: event.target.value });
    this.props.onSearch(event); // Passing the event to the parent component  // onSearch is a prop passed to Search component from App component.  // This prop is then used in App component to handle the search event.  // Inside App component, we have a function that listens to this prop and performs the required action when the event is triggered.  // In this case, it logs the event.target.value to the console.  // This is a
  };
  render() {
    return (
      <div>
        <input type="text" onChange={this.onSearch} />
        <p>You Typed - {this.state.text}</p>
      </div>
    );
  }
}
export default Search; 