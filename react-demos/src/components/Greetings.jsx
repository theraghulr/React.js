import React from 'react'

const Greetings = (props) => {
     return (props.DayofTime === "Morning" ?(<h1>Good Morning!</h1> ):(<h1>What time it is</h1>));
}

export default Greetings