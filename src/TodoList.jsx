import { useState } from 'react'

const TodoList = () => {
    const [task, setTask] =useState([]);
    const [newTask, setNewTask] =useState("");

    function handleInputChange(event){
    setNewTask(event.target.value);
    } 
    function addTask(){
        if(newTask.trim()!==""){setTask(task =>[...task,newTask]);
         setNewTask("")}
         
    }
    function deleteTask(index){
   const updatedTasks = task.filter((_,i)=> i !==index); //_ used for ignore
     setTask(updatedTasks);
    }
   

  return (
    <div className='to-do-list'>
        <h1>ToDo List</h1>

        <div>
            <input type="text" placeholder='Enter a Task' value={newTask} onChange={handleInputChange} />
            <button className='add-button' onClick={addTask}>Add</button>
        </div>
        <ol>
           {task.map((task,index)=>
           <li key={index}>
            <span className="text">{task}</span>
            <button className="delete-button" onClick={()=>deleteTask(index)}>Delete</button>
           
           </li>
           )}

        </ol>

    </div>
  )
}

export default TodoList