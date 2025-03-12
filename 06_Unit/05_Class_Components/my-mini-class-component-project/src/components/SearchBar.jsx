import React, { Component } from "react";
import "./SearchBar.css";

class SearchBar extends Component {
 
  searchHandle = (event) => {
    // console.log(event.target.value);
    this.props.onSearch(event);
  };

  render() {
  const { searchText} = this.props;
    return (
    <div className="form-container">
      <form className="form-wrapper">
        <input
          type="text"
          id="search"
          value={searchText}
          placeholder="Search for..."
          onChange={this.searchHandle}
        />
      </form>
    </div>
  );
};

}
export default SearchBar;


// const SearchBar = ({ onSearch, searchText }) => {
//   const searchHandle = (event) => {
//     // console.log(event.target.value);
//     onSearch(event);
//   };

//   return (
//     <div className="form-container">
//       <form className="form-wrapper">
//         <input
//           type="text"
//           id="search"
//           value={searchText}
//           placeholder="Search for..."
//           onChange={searchHandle}
//         />
//       </form>
//     </div>
//   );
// };

// export default SearchBar;
