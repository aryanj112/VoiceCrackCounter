import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function incrementCount(){
    setCount(count + 1);
  }

  return (
    <>
      <h1> Voice Crack Counter </h1>
      
      <h2> {count} </h2>
      
      <button onClick = {incrementCount}>
        Someone just voice cracked 🤣
      </button>
      
    </>
  )
}

export default App
