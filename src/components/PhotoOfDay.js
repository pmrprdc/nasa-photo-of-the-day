import { getDefaultNormalizer } from "@testing-library/react"
import React ,{useState} from "react"
import styled from "styled-components"


export default function PhotoOfDay(props){

    const StyledImage = styled.img`
    width: 80%;
    border: 100px solid black;
    
    `;


 const {data} = props;
    return(
        <div>
            <h1>{data.title}</h1>
            <StyledImage src={data.hdurl}/>
            <h3>
                {data.date}
            </h3>
            <p>{data.explanation}</p>
        </div>

    )


}