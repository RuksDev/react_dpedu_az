import React, { Component } from "react";
import StudentsCard from "./components/StudentsCard";
import SearchBar from "./components/SearchBar";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
       studentList :[
      { name: "Amal", age: 20, town: "Kandy" },
      { name: "Sunil", age: 41, town: "Colombo" },
      { name: "Kasun", age: 32, town: "Bandarawela" },
    ],
    };
  }

   searchChange = (event) => {
    console.log(event.target.value);
    this.setState({text:event.target.value});
  };
  render() {
     const {text, studentList} = this.state;
     const searchStudents = studentList.filter((student) => {
       return student.name.toLowerCase().includes(text.toLowerCase());
     });
return (
  <div>
    <h1>My React App</h1>
    <SearchBar onSearch={this.searchChange} searchText={text} />
    <div>
      <p id="sample-text">{text}</p>
      <p id="sample-text-2"></p>
    </div>

    {searchStudents.map((student, index) => {
      return (
        <StudentsCard
          key={index}
          name={student.name}
          age={student.age}
          homeTown={student.town}
        />
      );
    })}
  </div>
);
  }
}
export default App;

// function App() {
//   const [text, setText] = useState("");

//   const studentList = [
//     { name: "Amal", age: 20, town: "Kandy" },
//     { name: "Sunil", age: 41, town: "Colombo" },
//     { name: "Kasun", age: 32, town: "Bandarawela" },
//   ];

//   const searchStudents = studentList.filter((student) => {
//     return student.name.toLowerCase().includes(text.toLowerCase());
//   });

//   const searchChange = (event) => {
//     console.log(event.target.value);
//     setText(event.target.value);
//   };

//   return (
//     <div>
//       <h1>My React App</h1>
//       <SearchBar onSearch={searchChange} searchText={text} />
//       <div>
//         <p id="sample-text">{text}</p>
//         <p id="sample-text-2"></p>
//       </div>

//       {searchStudents.map((student, index) => {
//         return (
//           <StudentsCard
//             key={index}
//             name={student.name}
//             age={student.age}
//             homeTown={student.town}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default App;
