import React, {Component, useState} from "react";
import '../styles/App.css';
import Slide from "./Slide";

const App = (props) => {
  const [currentSlideIndex,setCurrentSlideIndex] = useState(0);

  const isLastSlide=()=>{
    return currentSlideIndex === props.slides.length-1;
  }
  const isFirstSlide=()=>{
    return currentSlideIndex === 0;
  }
  const nextSlide=()=>{
    if(!isLastSlide()){
      setCurrentSlideIndex(currentSlideIndex +1);
    }
  }
  const prevSlide=()=>{
    
    if(!isFirstSlide()){
      setCurrentSlideIndex(currentSlideIndex - 1);
    }
  }
  const restartSlide = ()=>{
    setCurrentSlideIndex(0);
  }
  return (
    <>
    <Slide slide={props.slides[currentSlideIndex]}></Slide>
    <button data-testid="button-restart" onClick={restartSlide} disabled={isFirstSlide()}>Restart</button>
    <button data-testid="button-next" onClick={nextSlide} disabled={isLastSlide()}>Next</button>
    <button data-testid="button-prev" onClick={prevSlide} disabled={isFirstSlide()}>Prev</button>
    </>
  )
}


export default App;
