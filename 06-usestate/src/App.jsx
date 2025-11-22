import React from 'react'
import { useState } from 'react'

const App = () => {
  
  const [num, setnum] = useState(0)

  function increaseNum(){
    setnum(num+1)
  }
  function decreaseNum(){
    setnum(num-1)
  }
  const jumpNum = () =>{
    setnum(num+10)
  }
  
  const submitting = (e) =>{
    e.preventDefault()
    console.log("form submitted");
  }

  const [num1, setnum1] = useState({user:'a',age:20})

  const advusestate = ()=>{
    const newnum = {... num1};
    newnum.user = 'b'
    setnum1(newnum)
  }
  return (
    <div>
      
        <h1>name is {num1.user}</h1>
        <button onClick={advusestate}>click</button>
            
      <h1>{num}</h1>
      <button onClick={increaseNum}>Increase</button>
      <button onClick={decreaseNum}>Decrease</button>
      <button onClick={jumpNum}>+10increase</button>

      <div>
        <form onSubmit={(e) =>{
          submitting(e)
        }}>
          <input type="text" placeholder='enter name' />
          <button >Submit</button>
        </form>
      </div> 
    </div>
  )
}

export default App
