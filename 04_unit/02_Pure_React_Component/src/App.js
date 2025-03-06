const Students = () => {
  return React.createElement("div", {}, [
    React.createElement("h3", {}, "Amal"),
    React.createElement("h3", {}, "20"),
    React.createElement("h3", {}, "Gampaha"),
  ]);
};

const StudentCard = () => {
  return React.createElement(
    "div",
    {className: "st-card"},
    React.createElement("img", {
      src: "https://cdn.pixabay.com/photo/2024/04/03/05/49/created-by-ai-8672131_640.png",
      alt: "Student Image",
      className: "student-image",
    }),
    React.createElement(Students)
  );
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "My React Application"),
    React.createElement(StudentCard),
    React.createElement(StudentCard),
    React.createElement(StudentCard),
    React.createElement(StudentCard),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
