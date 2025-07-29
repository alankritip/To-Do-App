import ToDoItem from "./ToDoItem";

function ToDoList({toDos ,deleteToDo,editToDo, toggleComplete}){
    return (
        <div className="todo-list">
            {toDos.map((todo)=> <ToDoItem 
            key= {todo.id}
            todo={todo}
            deleteToDo={deleteToDo}
            editToDo = {editToDo}
            toggleComplete = {toggleComplete}
            /> )
            }
        </div>
    )
}
export default ToDoList;