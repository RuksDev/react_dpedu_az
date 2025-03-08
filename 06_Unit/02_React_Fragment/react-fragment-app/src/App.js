import logo from "./logo.svg";
import "./App.css";
import OrderedList from "./components/OrderedList";
import UnorderedList from "./components/UnorderedList";

function App() {
  const nameLists = [
    "Alice",
    "Bob",
    "Henry",
    "Chalet",
    "Dave",
    "Mike",
    "Anna",
    "Jane",
    "Sarah",
    "Patrick",
    "Emily",
    "Olivia",
    "William",
    "Ethan",
    "Lucas",
    "Isabella",
    "Oliver",
    "alogue",
  ];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <OrderedList itemList={nameLists} />
        <UnorderedList itemList={nameLists} />
      </header>
    </div>
  );
}

export default App;
