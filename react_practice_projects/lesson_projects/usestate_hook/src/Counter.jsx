import React, {useState} from 'react';


function Counter(){


    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={increment}>Number go up</button>
            <button className="counter-button" onClick={decrement}>Number get sad</button>
            <button className="counter-button" onClick={reset}>Number fall in void</button>
        </div>
    )
}

export default Counter