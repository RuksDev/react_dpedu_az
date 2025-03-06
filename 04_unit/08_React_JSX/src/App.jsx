import React from "react";

import { createRoot } from "react-dom/client";

import StudentsCard from "./components/StudentsCard";
import { test } from "./components/StudentsCard";

console.log(test);

const App = () => {
  return (
    <div>
      <h1>My React App</h1>
      <StudentsCard name="Amal" age={40} homeTown = "Badulla"/>
      <StudentsCard name="Kasun" age={34} homeTown = "Badulla"/>
      <StudentsCard name="Nimal" age={40} homeTown = "Colombo"/>
      <StudentsCard name="Saman" age={40} homeTown = "Gampaha"/>
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
