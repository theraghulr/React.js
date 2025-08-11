import React, { useEffect, useState } from 'react'

const BasicEffect = () => {

    const [message, setMessage] =useState("");

  useEffect (()=>{
    console.log("Call useEffect")
    console.log("hi")
  }, [message])
  return (
    <div>BasicEffect</div>
  )
}

export default BasicEffect