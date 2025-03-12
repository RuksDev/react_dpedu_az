import "./App.css";
import { useState } from "react";
function App() {
  const [gender, setGender] = useState(" ");
  const pronounList = {
    Mr: "Male",
    Mrs: "Female",
    Miss: "Female",
    Ms: "Female",
  };

  const handlePronounChange = (event) => {
    const selectedPronoun = event.target.value;
    setGender(pronounList[selectedPronoun] || "");
  };

  return (
    <div className="App">
      <header className="App-header">
        <label htmlFor="pronoun">Select Pronoun</label>
        <select key={"pronoun"} onChange={handlePronounChange}>
          <option value="">Select Your Pronoun</option>
          <option value="Mr">Mr</option>
          <option value="Mrs">Mrs</option>
          <option value="Miss">Miss</option>
          <option value="Ms">Ms</option>
        </select>
        <br />
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />

        <div>
          <label htmlFor="">Male</label>
          <input
            value="male"
            type="radio"
            name="gender"
            checked={gender === "Male"}
          />
        </div>

        <div>
          <label htmlFor="">Female</label>
          <input
            value="female"
            type="radio"
            name="gender"
            checked={gender === "Female"}
          />
        </div>
      </header>
      <p>{gender}</p>
    </div>
  );
}

export default App;
