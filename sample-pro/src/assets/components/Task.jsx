import React, { useState, useEffect } from 'react'

const Task = () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [result, setResult] = useState(0)
  const [addClick, setAddClick] = useState(false)

  useEffect(() => {
    if (addClick) {
      setResult(Number(num1) + Number(num2))
      setAddClick(false)
      
    }
    console.log("useEffect called with dependency");
  },[addClick])

  return (
    <div>
      <h1>Add Two Numbers using useEffect</h1>

      <input
        type="number"
        placeholder="Enter First Number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Enter Second Number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <br /><br />

      <button onClick={() => setAddClick(true)}>
        Add
      </button>

      <h2>Result: {result}</h2>
    </div>
  )
}

export default Task