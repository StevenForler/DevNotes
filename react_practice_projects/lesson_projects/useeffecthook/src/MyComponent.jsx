import React, {useState, useEffect} from "react";

//useEffect hook tells react to do some code when(one of these happens):
//  - this component re-renders
//  - this component mounts(confirm what mounting a component means)
//  - the state of a value

// useEffect is like using some side code in a function.
// useEffect(function, [dependencies])

// what dependencies are there:
// 1. useEffect(() => {})           // Runs after every re-render
// 2. useEffect(() => {}, [])       // Runs only on mount
// 3. useEffect(() => {}, [value]   // Runs on mount + when value changes

// USES
// #1.  Event Listeners
// #2.  DOM Manipulation
// #3.  Subscriptions (real-time updates) ?
// #4.  Fetching Data from an API*
// #5.  Clean up when a component unmounts?

// Mount: in the case of react. it refers to the process of initializing and inserting a component in the DOM
// Unmount: means to remove it from the DOM.
// DOM: Document Object Model

function MyComponent() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {// setting up useEffect function allows for more functionality 
        window.addEventListener("resize", handleResize); // in some cases this line could run on its own but will update after every re-render
        console.log("EVENT LISTENER ADDED");

        return () => { // adding clean up code to remove code that isn't 
            window.removeEventListener("resize", handleResize);
            console.log("EVENT LISTENER REMOVED");
        }
    }, []);

    useEffect(() => { //this activates on mount
        document.title = `Size: ${width} x ${height}`;
    }, [width, height]); // this array of dependencies helps only update when the value changes

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p>Window Width: {width}px</p>
        <p>Window Height: {height}px</p>
    </>);
}

export default MyComponent;