import React from "react";
import Students from "./Students";

// const StudentCard = (props) => {
//   return React.createElement(
//     "div",
//     { className: "st-card" },
//     React.createElement("img", {
//       src: "https://cdn.pixabay.com/photo/2024/04/03/05/49/created-by-ai-8672131_640.png",
//       alt: "Student Image",
//       className: "student-image",
//     }),
//     React.createElement(Students, { ...props }, null),
//   );
// };

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

export const test = 10;

export default StudentsCard;
