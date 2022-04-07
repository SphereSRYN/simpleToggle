import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { useState } from "react";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  function toggleDarkMode() {
    console.log(" toggleDarkMode");
    setDarkMode((preMode) => !preMode);
  }
  return (
    <div className="container">
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main darkMode={darkMode} />
    </div>
  );
}

export default App;
