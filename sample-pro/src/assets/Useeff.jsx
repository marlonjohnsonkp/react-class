import React from 'react'

const Useeff = () => {
    const [count,setCount]=
    React.useState(0);
    React.useEffect(()=>{
        console.log("useEffect called with dependency");
    
    },)
  return (
    <>
    <div>
        <h1>useEffect</h1>
        <h1>{count}</h1>
        <button onClick={()=>
            setCount(count+1)
        }>Inc</button>
        
    </div>
    </>
   )
}

export default Useeff