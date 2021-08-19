import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
import Alert from './components/Alert';

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
    }
    else if (currentMode === 'dark') {
        document.body.style.backgroundColor = '#042743';
      }
      else {
        document.body.style.backgroundColor = '#19a319'
      }
  }

  return (
    <>
    {/* <Navbar title="TextUtils" aboutText="About Text" /> */}
    {/* <Navbar /> */}
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert} />
    <div className="container my-3">
      <TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />
      {/* <About/> */}
    </div>
    </>
  );
}

export default App;
