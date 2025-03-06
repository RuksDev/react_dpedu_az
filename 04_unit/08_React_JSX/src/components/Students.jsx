import React from "react";

// const Students = (props) => {
//   return React.createElement("div", {}, [
//     React.createElement("h3", {}, props.name),
//     React.createElement("h4", {}, props.age),
//     React.createElement("h4", {}, props.homeTown),
//   ]);
// };

const Students = ({name, age, homeTown}) => {
  return (
    <div>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{homeTown}</h3>
    </div>
  );
};

export default Students;
