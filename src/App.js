import React from "react";
import "./App.css";




function App() {

  function clickHandler(evt){

    console.log(evt)
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
