import { getDefaultNormalizer } from "@testing-library/react"
import React ,{useState} from "react"


export default function PhotoOfDay(props){


 const {data} = props;
    return(
        <div>
            <h1>{data.title}</h1>
            <img src={data.hdurl} width="400px"/>
            <h3>
                {data.date}
            </h3>
            <p>{data.explanation}</p>
        </div>

    )


}