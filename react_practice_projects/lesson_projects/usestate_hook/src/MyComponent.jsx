import React, {useState} from 'react';

function MyComponent(){

    const [name, setName] = useState("Guest"); // passing an arguement here gives the site an "initial state"
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName("Spongebob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }
    return( <div>
                <p>Name: {name}</p>
                <button onClick={updateName}>Set Name</button>

                <p>Age: {age}</p>
                <button onClick={incrementAge}>Increase Age</button>

                <p>Is Employeed: {isEmployed ? "Yes" : "No"}</p>
                <button onClick={toggleEmployedStatus}>employed?</button>
            </div>)
}

export default MyComponent