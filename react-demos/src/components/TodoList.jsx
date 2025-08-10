import React, { useState } from 'react'

const TodoList = () => {

    const [Todos, setTodos] = useState([]);
    const [inputValue, setInputValue]= useState("")

    const handleSubmit =(e) => {
        e.preventDefault();

        if(inputValue.trim()){
            setTodos([...Todos, inputValue])
            setInputValue("")
        }
    }

    const handleChange =e=>{
        setInputValue(e.target.value)

    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' value = {inputValue} onChange={handleChange} placeholder='Add todo'></input>
            <button type='submit'>Add Todo</button>
        </form>

        <ul>
            {Todos.map((todo,index)=>(
                <li key ={index}>{todo}</li>
            ))}
        </ul>
    </div>
  )
}

export default TodoList