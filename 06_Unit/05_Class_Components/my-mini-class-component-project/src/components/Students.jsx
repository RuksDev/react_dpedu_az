import PropTypes from "prop-types";
import React, { Component } from "react";

class Students extends Component {
  render() {
    const { name, age, homeTown } = this.props;
    
    return (
      <div>
        <h3>{name}</h3>
        <h3>{age}</h3>
        <h3>{homeTown}</h3>
      </div>
    );
  }
}
Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  homeTown: PropTypes.string,
};

export default Students;
// const Students = ({name, age, homeTown}) => {
//   return (
//     <div>
//       <h3>{name}</h3>
//       <h3>{age}</h3>
//       <h3>{homeTown}</h3>
//     </div>
//   );
// };
// Students.propTypes = {
//   name : PropTypes.string,
//   age :PropTypes.number,
//   homeTown : PropTypes.string,
// };

// export default Students;
