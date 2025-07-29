import { useState } from "react";

function ToDoItem({todo ,deleteToDo,editToDo, toggleComplete}){
    const [isEditing , setIsEditing] = useState(false);
    const [editText ,setEditText] = useState(todo.text);
    const handleEdit = ()=>{
        if(isEditing && editText.trim()){
            editToDo(todo.id,editText);
        }
        setIsEditing(!isEditing);
    }
    return (
        <div className={`todo-item ${todo.completed ? 'completed':''}`}>
            {isEditing ? ( <input type="text" value={editText} onChange={(e)=> setEditText(e.target.value)} />)
            : (<span onClick={()=> toggleComplete(todo.id)}>{todo.text}</span>)}

            <div className="todo-actions">
                <button onClick={handleEdit}>{isEditing ? 'Save':'Edit'}</button>
                <button onClick={()=> deleteToDo(todo.id)}>Delete</button>
            </div>
        </div>
    )
}
export default ToDoItem;