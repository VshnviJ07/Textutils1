import React, { useState } from 'react';
import './App.css';
import Textform from './components/Textform'; // Correct path for Textform component
import About from './components/About';
import Navbar from './components/Navbar';
import Alert from './components/Alert'; // Ensure this path is correct
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

const Light = 'light'; // Define Light mode
const Dark = 'dark'; // Define Dark mode

function App() {
  const [mode, setDarkMode] = useState(Light); // Initialize state with Light mode
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === Light) {
      setDarkMode(Dark);
      document.body.style.background = '#042743';
      showAlert("Dark mode is enabled", "success");
      document.title = "Textutils - Dark Mode";
      setTimeout(() => {
        document.title = 'Install Textutils Now';
        setTimeout(() => {
          document.title = 'Textutils is Amazing';
        }, 2000);
      }, 2000);
    } else {
      setDarkMode(Light);
      document.body.style.background = 'white';
      showAlert("Light mode is enabled", "success");
      document.title = "Textutils - Light Mode";
    }
  };

  return (
    <Router>
      <Navbar title="Textutils" aboutText="About Textutils" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-4">
        <Routes>
          <Route exact path="/about" element={<About mode={mode}/>} />
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter your text to analyze below" mode={mode} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
