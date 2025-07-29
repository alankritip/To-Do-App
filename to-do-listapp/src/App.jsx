import { useState } from "react"
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";
import './App.css';

function App(){
  const [inputValue , setInputValue] = useState("");
  const [toDos , setToDos] = useState([]);
 const addToDo = () => {
    if(inputValue.trim()){
          setToDos([...toDos, {id: Date.now() , text: inputValue , completed: false}]);
          setInputValue("");
    }
  };
  const deleteToDo = (id) =>{
    setToDos(toDos.filter((todo)=> todo.id !== id));
  };
  const editToDo = (id , newText) =>{
    setToDos(toDos.map((todo)=> todo.id === id ? {...todo , text: newText} : todo));
  };
  const toggleComplete = (id)=>{
    setToDos(toDos.map((todo)=> todo.id === id ? {...todo , completed: !todo.completed}: todo));
  };
  return (
    <div className="app">
      <Header />
    <div className="input-container">
    <input type="text" placeholder="Add a new task..." value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
    <button onClick={addToDo}>Add Task</button>
    </div>
    <ToDoList toDos={toDos} 
    deleteToDo={deleteToDo}
    editToDo = {editToDo}
    toggleComplete = {toggleComplete}
    />
   </div>
  )
}

export default App;