import React, {useState} from "react";
import "./App.css";
import axios from 'axios';




function App() {

  function clickHandler(evt){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=jyvxS0ux5lMaUrbWkBCevhgnTdZaZwNjblMPWaQT&date=2023-01-13`)
    .then(res => {
      const persons = res.data;
      console.log(persons)
    })
  }


  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
        
      </p>
      <button onClick={clickHandler}>show the nasa photo of the day</button>
    </div>
  );
}

export default App;
