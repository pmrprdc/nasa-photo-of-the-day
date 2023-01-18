import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import PhotoOfDay from "./components/PhotoOfDay";
import styled from "styled-components";




function App() {
  const Button = styled.button`
  background-color: green;
  padding: 20px;
  margin-bottom: 200px;
  
  `;

  const Background = styled.div`
    background-color: lightblue;
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0 200px;
    padding: 0 200px;

  `

  const [data, setData] = useState("https://www.nasa.gov/sites/default/files/thumbnails/image/1_icon_olympus_multi-purpose_isru-based_lunarconstructionsystem_concept-render_nov2022_for_icon_release.jpg")
  

  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=jyvxS0ux5lMaUrbWkBCevhgnTdZaZwNjblMPWaQT`)
    .then(res => {
      
      setData(res.data)
    })

  },[])
 


  return (
    <Background className="App" >
      <PhotoOfDay data={data} />
      <Button>Click Me</Button>
    </Background>
  );
}

export default App;
