import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  // const [username, setUsername] = useState("abc");
  // const [password, setPassword] = useState("asd");
  // const [email, setEmail] = useState("abcd@gmail.com");
  // const [age, setAge] = useState(20);
  // const [gender, setGender] = useState("male");
  // const [country, setCountry] = useState("");
  // const [hobbies, setHobbies] = useState([]);

  const [fieldData, setFieldData] = useState({
    username: "",
    password: "",
    email: "",
    age: "",
    gender: "",
    country: "",
    hobbies: [],
  });

  console.log(fieldData);
  const fieldHandler = (e) => {
    const { type, name, value, checked } = e.target;
    console.log(value);

    if (type === "checkbox") {
      if (checked) {
        if (!fieldData[name].includes(value)) {
          setFieldData({ ...fieldData, [name]: [...fieldData[name], value] });
        }
      }else {
        const newList = fieldData[name].filter((item) => item !== value)
        setFieldData({...fieldData, [name]: newList });
      }
    } else {
      setFieldData({ ...fieldData, [name]: value });
    }
  };

  useEffect(() => {
    //get the select element of country selection
    const selectElement = document.getElementById("countrySelect");
    if (!selectElement) return;

    //handle mouse wheel event to scroll through country options
    const handleWheel = (e) => {
      e.preventDefault(); //prevent page scrolling

      const options = selectElement.options;
      let currentIndex = selectElement.selectedIndex;

      // Scroll up or down
      if (e.deltaY > 0) {
        // Scroll down
        currentIndex = (currentIndex + 1) % options.length;
      } else {
        // Scroll up
        currentIndex = (currentIndex - 1 + options.length) % options.length;
      }

      //update the country in fieldData state
      setFieldData((prevData) => ({
        ...prevData,
        country: options[currentIndex].value,
      }));
    };
    //add wheel event listener to the select element
    selectElement.addEventListener("wheel", handleWheel);
    //cleanup: remove event listener when the component unmount or country changes
    return () => selectElement.removeEventListener("wheel", handleWheel);
  }, [fieldData.country]); //Re-run effects when country changes

  // const usernameHandler = (e) => {
  //   console.log(e.target.value);
  //   setUsername(e.target.value);
  // };

  // const passwordHandler = (e) => {
  //   console.log(e.target.value);
  //   setPassword(e.target.value);
  // };

  // const emailHandler = (e) => {
  //   console.log(e.target.value);
  //   setEmail(e.target.value);
  // };
  // const ageHandler = (e) => {
  //   console.log(e.target.value);
  //   setAge(e.target.value);
  // };
  // const genderHandler = (e) => {
  //   console.log(e.target.value);
  //   setGender(e.target.value);
  // };
  // const countryHandler = (e) => {
  //   console.log(e.target.value);
  //   setCountry(e.target.value);
  // };
  // const hobbiesHandler = (e) => {
  //   if (e.target.checked) {
  //     console.log(e.target.value);
  //     if (!hobbies.includes(e.target.value)) {
  //       setHobbies([...hobbies, e.target.value]);
  //     }
  //   } else {
  //     const newHobbies = hobbies.filter((hobby) => hobby !== e.target.value);
  //     setHobbies(newHobbies);
  //   }
  // };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form action="" className="">
          <div className="">
            <label>Username:</label>
            <input
              type="text"
              id="username"
              value={fieldData.username}
              onChange={fieldHandler}
              name="username"
              required
            />
          </div>
          <div className="">
            <label>Password:</label>
            <input
              type="password"
              id="password"
              value={fieldData.password}
              onChange={fieldHandler}
              name="password"
              required
            />
          </div>
          <div className="">
            <label>Email:</label>
            <input
              type="email"
              id="email"
              value={fieldData.email}
              name="email"
              onChange={fieldHandler}
              required
            ></input>
          </div>
          <div className="">
            <label>Age:</label>
            <input
              type="number"
              id="age"
              name="age"
              value={fieldData.age}
              onChange={fieldHandler}
              min="0"
            />
          </div>
          <div className="">
            <label>Gender:</label>
            <label>
              <input
                type="radio"
                name="gender"
                value="male"
                onChange={fieldHandler}
                checked={fieldData.gender === "male"}
              ></input>
              Male
            </label>
            <label>
              <input
                type="radio"
                name="gender"
                value="female"
                onChange={fieldHandler}
                checked={fieldData.gender === "female"}
              ></input>
              Female
            </label>
          </div>
          <div className="">
            <label>Country:</label>
            <select
              id="countrySelect"
              name="country"
              onChange={fieldHandler}
              value={fieldData.country}
            >
              <option>Select your country</option>
              <option value="usa">USA</option>
              <option value="canada">Canada</option>
              <option value="newzealand">NewZealand</option>
              <option value="uk">UK</option>
              <option value="india">India</option>
              <option value="srilanka">Sri Lanka</option>
              <option value="spain">Spain</option>
              <option value="qatar">Qatar</option>
              <option value="china">China</option>
            </select>
          </div>
          <div className="">
            <label>Hobbies:</label>
            <br />
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="reading"
                onChange={fieldHandler}
              ></input>
              Reading
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="traveling"
                onChange={fieldHandler}
              ></input>
              Traveling
            </label>
            <label>
              <input
                type="checkbox"
                name="hobbies"
                value="coding"
                onChange={fieldHandler}
              ></input>
              Cording
            </label>
          </div>
        </form>
      </header>
    </div>
  );
}

export default App;
