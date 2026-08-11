import React from 'react'
import { useState } from 'react'
const App = () => {
  let[count,setcount]=useState(0)
  function increment(){
    setcount(count+1)
  }
    function decrement(){
      setcount(count=0)
    }
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>click</button><br></br><br></br>
      <button onClick={decrement}>reset</button>
    </div>
  )
}

export default App
