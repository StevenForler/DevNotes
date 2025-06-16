import React, { useState } from 'react';

function toDoList (){
    
    const [event, setEvent] = useState([]);
    const [date, setDate] = useState(new Date().getMonth().getDate())

    function addTask(){
        
        const newTask={ task: event,
                        date: date};

        setEvent(e =>[...e, newTask]);

        setEvent("");
        setDate(new Date().getMonth().getDate())
    }

    function removeTask(index){

        setCars(c => c.filter((_, i) => i !== index));
    }

    return(
        <div>
            <ul>
                {task.map((task, index) =>
                <li key={index} onClick={() => removeTask(index)}>
                    {task.event} {task.date}
                </li>)}
            </ul>

        </div>
    )
}