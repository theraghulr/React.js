import { useState, useEffect } from "react"
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import CopyInput from "./components/CopyInput";
import PopupContent from "./components/popUpContent";
import Switcher from "./components/Switcher";
import BasicEffect from "./components/BasicEffect";
import CounterEffect from "./CounterEffect";
import FetchDataEffect from "./FetchDataEffect";
import uniqueId from "./components/uniqueId";

import useFetch from "./components/useFetch";


const App = () => {

  return (
    <div>
   <uniqueId/>
    </div>
  );
};

export default App;