import PropTypes from "prop-types";
import React, { useState } from "react";

const Students = ({ name, age, homeTown }) => {
  const [newAge, setNewAge] = useState(age);

  const handelWheel = (event) => {
    console.log(event.deltaY);
    if (event.deltaY < 0) {
      console.log("Mouse Scrolled Down");
      setNewAge(newAge - 1);
    } else {
      console.log("Mouse Scrolled Up");
      setNewAge(newAge + 1);
    }
  };

  return (
    <div>
      <h3>{name}</h3>
      <h3 onWheel={handelWheel}>{newAge}</h3>
      <h3>{homeTown}</h3>
    </div>
  );
};
Students.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number,
  homeTown: PropTypes.string,
};

export default Students;
