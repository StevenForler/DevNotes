import React, { useState } from 'react';

// spread operators (...) allow you to copy from an already exisitng array. 
// this is helpful in the instance of keeping dups from appearing, as JS will just use the latest property to avoid confusion.

function MyComponent(){

    const [car, setCar] = useState({year: 2024, 

                                                           make: "Ford", 

                                                           model: "Mustang"});

    function handleYearChange(event){
    //  
        setCar(c => ({...c, year: event.target.value}));
    //  setCar({year: 2025}); => this will cause the other properties to be overwritten and make them disappear. 
    //  The spread operator actually helps prevent this as well. ex setCar({...car,year: 2025});
    // having curly braces after an arrow function will make JS think you're trying to write a multi-line statement (ex. setCar) but adding an additional set of () around your {} will allow you to make an object
    }

    function handleMakeChange(event){

        setCar(c => ({...c, make: event.target.value}));
    }

    function handleModelChange(event){
        setCar(c => ({...c, model: event.target.value}));
    }

    return (<div>

                <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

                <input type="number" value={car.year} onChange={handleYearChange}/><br/>
                <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
                <input type="text" value={car.model} onChange={handleModelChange}/><br/>
            </div>);
};
export default MyComponent