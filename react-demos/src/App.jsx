import { useState } from "react"

// const Button = ()=>{
//   const handleClick = () => console.log("You touched me")

//   return (
//     <button onClick={handleClick}>ClickMe</button>
//   )
// }

// const Copy =() => {
//   const onCopying =() => console.log("Type the code bro!")
//   return (
//     <p onCopy={onCopying}>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto quibusdam fuga nisi repellat vitae culpa accusantium accusamus inventore dolorem animi soluta eos totam voluptatibus dolorum, consequatur minima alias veritatis odio!
//     </p>
//   )
// }

const App=()=>{

  const [count ,setCount] = useState(0);

  const increment  = () => setCount(count+1);
  const decrement  = () => setCount(count-1);

  return (<div>
    <h1>{count}</h1>
    <button onClick = {increment}>+</button>
    <button onClick = {decrement}>- </button>
    </div>
  )
}

export default App;