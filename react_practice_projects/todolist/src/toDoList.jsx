import React, { useState } from 'react';

//to do requirements. 1.
function ToDoComponent (){

    const [task, setTask] = useState([]);
    const [taskDate, setTaskDate] = useState(new Date().getDate.now())
    //this should get "January 1, 1970 00:00:00 UTC"
    function handleAddTask(){

        const newTask= {todo: task,
                        date: taskDate
                        }

        setTask(t => [...t,newTask]);

        setTask("");
        setTaskDate(new Date().getDate.now())
    }

    function handleRemoveTask(index){
        setTask(t => t.filter((_, i) => i !== index));
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
                {task.map((task, index) =>
                <li key={index} onClick={() => handleRemoveTask(index)}> 
                    {task.date}
                </li>)}
            </ul>
            
            <input type="text" value={taskDate} onChange={handleTaskDateChange}/><br/>
            <input type="text" value={task} onChange={handleTaskChange} /><br/>
            <button onClick={handleAddTask}></button>
        </div>
    );
}

export default ToDoComponent