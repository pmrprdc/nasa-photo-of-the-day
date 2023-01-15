import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import PhotoOfDay from "./components/PhotoOfDay";




function App() {


  const [data, setData] = useState("https://www.nasa.gov/sites/default/files/thumbnails/image/1_icon_olympus_multi-purpose_isru-based_lunarconstructionsystem_concept-render_nov2022_for_icon_release.jpg")
  

  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=jyvxS0ux5lMaUrbWkBCevhgnTdZaZwNjblMPWaQT`)
    .then(res => {
      
      setData(res.data)
    })

  },[])
 


  return (
    <div className="App" style={{display:"flex", flexDirection:"column",alignItems:"center"}}>
      <PhotoOfDay data={data} />
    </div>
  );
}

export default App;
