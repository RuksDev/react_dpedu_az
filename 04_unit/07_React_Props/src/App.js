import React from "react";

import { createRoot } from "react-dom/client";

const Students = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, props.name),
    React.createElement("h4", {}, props.age),
    React.createElement("h4", {}, props.homeTown),
  ]);
};

const StudentCard = (props) => {
  return React.createElement(
    "div",
    { className: "st-card" },
    React.createElement("img", {
      src: "https://cdn.pixabay.com/photo/2024/04/03/05/49/created-by-ai-8672131_640.png",
      alt: "Student Image",
      className: "student-image",
    }),
    React.createElement(Students, { ...props }, null),
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "My React Application"),
    React.createElement(
      StudentCard,
      {
        name: "Kamal",
        age: 22,
        homeTown: "Colombo",
      },
      null,
    ),
    React.createElement(
      StudentCard,
      {
        name: "Nimal",
        age: 21,
        homeTown: "Badulla",
      },
      null,
    ),
    React.createElement(
      StudentCard,
      {
        name: "Sunil",
        age: 18,
        homeTown: "Galle",
      },
      null,
    ),
    React.createElement(
      StudentCard,
      {
        name: "Kasun",
        age: 31,
        homeTown: "Badulla",
      },
      null,
    ),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
