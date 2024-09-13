import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const[text,setText]=useState('');

  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }


// variation 1  ->every render
  // useEffect(()=>{
  //     console.log("ui rendering done")
  // });


// variation 2 =>
  // useEffect(()=>{
  //   console.log("ui rendering done")
  // },[])

//variation 3 => first render + whenever dependency chnages 
  // useEffect(()=>{
  //   console.log("change observed  ")
  // },[text])  
  // jb bhi text change hoga tb render hoga




  // variation 4 => to handle unmounting of a component 
  useEffect(()=>{
      // add event listener  
    console.log("listener added ");



    return()=>{
      console.log("listener removed ");
    }
  },[text])

  return (
    <div className="App">
     <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
