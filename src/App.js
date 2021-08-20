import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // Wheather dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = (event) => {
    // if (mode === 'light') {
    //   setMode('dark');
    //   document.body.style.backgroundColor = '#042743';
    //   showAlert("Dark mode has been enabled", "success");
    // }
    // else {
    //   setMode('light');
    //   document.body.style.backgroundColor = 'white';
    //   showAlert("Light mode has been enabled", "success");
    // }
    setMode(event.target.value);
    let currentMode = event.target.value;
    showAlert(`${currentMode} mode has been enabled`, "success");
    if (currentMode === 'light') {
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode'
    }
    else if (currentMode === 'dark') {
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      document.body.style.backgroundColor = '#19a319'
      document.title = 'TextUtils - Green Mode'
    }

    // setInterval(() => {
    //   document.title = 'TextUtils is Amazing';
    // }, 2000);

    // setInterval(() => {
    //   document.title = 'Install TextUtils Now';
    // }, 1500);
  }

  return (
    <>
      {/* <Navbar title="TextUtils" aboutText="About Text" /> */}
      {/* <Navbar /> */}
      <Router>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Switch>
            {/* /users --> Component 1
            /users/home --> Component 2 */}
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/">
              <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
            </Route>
          </Switch>
          {/* <About/> */}
        </div>
      </Router>
    </>
  );
}

export default App;
