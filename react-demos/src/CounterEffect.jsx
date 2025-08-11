import React, { useState, useEffect } from 'react';


const CounterEffect = () => {
    const [num , setNum] = useState(0);

    useEffect(()=>{
        document.title=`Increment ${num}`;
    },[num])

  return (
    <div>
        <button onClick={()=>setNum(num+1)}>Incrementer</button>
    </div>
  )
}

export default CounterEffect