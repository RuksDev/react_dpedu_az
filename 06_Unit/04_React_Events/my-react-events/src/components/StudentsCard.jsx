import React from "react";
import Students from "./Students";
import PropTypes from "prop-types";


const StudentsCard = ({ name, age, homeTown }) => {
  return (
    <div className="st-card">
      <img
        src="https://cdn.pixabay.com/photo/2024/04/03/05/49/created-by-ai-8672131_640.png"
        alt={`Student Image_${name}`}
        className="student-image"
      />
      <Students name={name} age={age} homeTown={homeTown} />
    </div>
  );
};

StudentsCard.propTypes = {
  name : PropTypes.string,
  age :PropTypes.number,
  homeTown : PropTypes.string,
};

export default StudentsCard;
