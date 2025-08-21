import { useState, useEffect } from "react"
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import CopyInput from "./components/CopyInput";
import PopupContent from "./components/popUpContent";
import Switcher from "./components/Switcher";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./CounterEffect";
import FetchDataEffect from "./FetchDataEffect";




const App = () => {

  const [data , setData] = useState(null);


  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/todos')
    .then((res)=>res.json())
    .then((data)=>setData(data));
    
  },[])



  return (
    <div>
      {
        data && data.map ((item)=>{
          return<p key={item.id}>{item.title}</p>
        })
      }
  
    </div>
  );
};

export default App;