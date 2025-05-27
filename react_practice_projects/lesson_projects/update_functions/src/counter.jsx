// updater function = A function passed as an argument to setState() usually
//                                  ex. setYear(y => y + 1)
//                                 Allow for safe updates based on the previous state
//                                 Used with multiple state updates and asynchronous functions
//                                 Good practice to use updater functions

import React, { useState } from 'react';

function MyComponent() {

    const [count, setCount] = useState(0);

    function increment(){
        setCount(c => c + 1); // to count the previous state (the initial letter for the update variable(c in this case) or prevCount

    //  setCount(count + 1) this will count the current state which doesn't help if you want to do multiple updates to the variable in 1 function

    //  ex: this will only count the CURRENT state as react batches together updates to help with performance by default.
    //  it causes this function below to increment only 1 at a time and not three.
    //    setCount(count + 1)
    //    setCount(count + 1)
    //    setCount(count + 1) 
            update
    //  since the current state doesn't update until after the function has run through. 
    //  no matter how many time you put setCount(count + 1) it will just be 0+1 in the end.
    };
 
    function decrement(){
        setCount(c => c - 1);
        
    };

    function reset(){
        setCount(0);
    }

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <button onClick={increment}>Increment</button>
        </div>
      );
}
export default MyComponent