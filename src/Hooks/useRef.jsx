import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";


/*
 Description: What on earth is going on

 Everytime a user enters a `inputValue` changes, causing a re-render (when a useState object changes a re-render is caused)
 We want to track the number of re-renders,
 ----------------------Tracking using UseState-------------------
 
export default function CounterComp() {
  const [inputValue, setInputValue] = useState("");
  const [inputCounter,setInputCounter] = useState(0);

  useEffect(() => {
    //count.current = count.current + 1;
    setInputCounter(inputCounter+1);
    console.log(`re-rendering no. ${inputCounter}`)
  },[inputCounter]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {inputCounter}</h1>
    </>
  );
}

As when an state item is updated, it re-renders, what do you think happens when you use state to track that state?
  It re-renders again causing an infinite loop


----------------------Tracking using useRef----------------------

export default function CounterComp() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => { //on every page re-render this runs
    count.current = count.current +1
 
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}//this causes a page re-render
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}




 
 
 */

export default function CounterComp() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => { //on every page re-render this runs
    count.current = count.current +1
 
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}//this causes a page re-render
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
