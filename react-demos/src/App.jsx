import { useState } from "react"
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import CopyInput from "./components/CopyInput";
import PopupContent from "./components/popUpContent";
import Switcher from "./components/Switcher";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./CounterEffect";
import FetchDataEffect from "./FetchDataEffect";

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


const App = () => {
  const [copied, setCopied] = useState(false);

  return (
    <div>
      {/* <Switcher/>
      <BasicEffect /> */}
      {/* <CounterEffect /> */}
      <FetchDataEffect />
    </div>
  );
};

export default App;