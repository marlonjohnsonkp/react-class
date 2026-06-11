import React, { useState } from 'react'
import './newComp.css'

const NewComp = ()=>{
    const [count,setCount]= useState(0);
    const inc =()=>{
        if(count<10){
            setCount(count +1);
        }
    }
    const dec = ( ) =>{
        if(count > 0){
            setCount(count -1);
        }
    }
    const reset = ()=>{
        setCount(0)
    }
    return (
        <>
        <div>
       <h1>Counter</h1>
       <h1>{count}</h1>
       <button onClick={inc}>Inc</button>
       <button onClick={dec}>Dec</button>
       <button onClick={reset}>Reset</button>
        </div>
        </>
    )
}
export default NewComp