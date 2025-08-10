import React, { useState } from 'react'

const Counter = () => {
    const [Counter ,  setCounter] = useState(0);

    const clickhandler = () => setCounter(Counter+1);

  return (
    <div>
        <h1>{Counter}</h1>
        <button onClick={clickhandler}>ClickMe</button>
        </div>
  )
}

export default Counter