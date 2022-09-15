import React from "react"

export default function Slide(props){
    return( <div style={{border:"1px solid black", padding:"4px"}}>
        <h1 data-testid="title">{props.slide.title}</h1>
        <p data-testid="text">{props.slide.text}</p>
    </div>
    )
}