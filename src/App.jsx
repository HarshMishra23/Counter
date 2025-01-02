import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'



function App() {
  
  let [counter, setcounter] = useState(0)

  // let counter = 0

  const addValue = () => {
    console.log("clicked", counter);
    
    // counter = counter + 1
    setcounter(counter + 1)
    
  }

  const removeValue = () => {
    setcounter(counter - 1)
  }

  return (
    <>
     
     
     <h1>Counter value : {counter}</h1>

     <button 
     onClick={addValue}
     ><b>Add value </b></button>

     <br />

     <button 
     onClick={removeValue}
     ><b>Remove value</b> </button>

    </>
  )
}

export default App