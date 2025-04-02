import { useState } from 'react';
import './App.css'
import Header from './Components/Header'

function App() {
  const [start,setStart]=useState(false);
  function handleStart(){
    setStart(!start);
  }
  return (
    <>
      <Header handleStart={handleStart} start={start}/>
    </>
  )
}

export default App
