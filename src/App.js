import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import PhotoOfDay from "./components/PhotoOfDay";
import styled from "styled-components";




const Button = styled.button`
background-color: black;
padding: 20px;
margin-bottom: 200px;
color: white;
font-size: 40px; 
border-radius: 20px;
box-shadow: 5px red;
`;



const Background = styled.div`
 
  width: 50%;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border-radius: 5px;
  align-items: center;
  color: white;

`;
function App() {

  
  const [data, setData] = useState("https://www.nasa.gov/sites/default/files/thumbnails/image/1_icon_olympus_multi-purpose_isru-based_lunarconstructionsystem_concept-render_nov2022_for_icon_release.jpg")
  
  function timeMachine(){
    const randomYear = 2000 + (Math.floor(Math.random()*22));
    const randomMonth = Math.floor(Math.random()*12)
    const randomDay = Math.floor(Math.random()* randomMonth===2?28:30)
    const randomDate = `${randomYear}-${randomMonth}-${randomDay}`
    const url = `https://api.nasa.gov/planetary/apod?api_key=jyvxS0ux5lMaUrbWkBCevhgnTdZaZwNjblMPWaQT&date=${randomDate}`
    
   
    axios.get(url).then(res=>{
      setData(res.data)
    }).catch(err=>{
      console.log(err)
    })
  
  }

  useEffect(()=>{
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=jyvxS0ux5lMaUrbWkBCevhgnTdZaZwNjblMPWaQT`)
    .then(res => {
      
      setData(res.data)
    
    })

  },[])
 


  return (
    <Background className="App" >
      <PhotoOfDay data={data} />
      <Button onClick={timeMachine}>Take Me To The Past</Button>
    </Background>
  );
}

export default App;
