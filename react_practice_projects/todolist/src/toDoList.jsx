import React, { useState } from 'react';

//to do requirements. 1.
function ToDoComponent (){

    const [tasks, setTasks] = useState([]); // if making a variable with multiple items make the name plural
    const [task, setTask] = useState("")
    const [taskDate, setTaskDate] = useState([])
    
    function handleAddTask(){

        const newTask= {todo: task,
                        date: taskDate};

        setTasks(t => [...t,newTask]);

        setTask("");
        setTaskDate([])
    }

    function handleRemoveTask(index){
        setTasks(t => t.filter((_, i) => i !== index));
    }

    function handleTaskChange(event){

        setTask(event.target.value);
    }
    
    function handleTaskDateChange(event){

        setTaskDate(event.target.value);
    }

    return(
        <div>
            <h2>To Do list</h2>
            <ul>
                {tasks.map((task, index) =>
                    <li key={index} onClick={() => handleRemoveTask(index)}> 
                        {task.todo} {task.date}
                    </li>)}
            </ul>
            
            <input type="date" value={taskDate} onChange={handleTaskDateChange}/><br/>
            <input type="text" value={task} onChange={handleTaskChange}/><br/>
            <button onClick={handleAddTask}>Add Task</button>
        </div>);
}

export default ToDoComponent