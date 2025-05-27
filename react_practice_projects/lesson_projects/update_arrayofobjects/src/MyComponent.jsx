import React, { useState } from 'react';

function MyComponent() {

    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carMake, setCarMake] = useState("");
    const [carModel, setCarModel] = useState("");
// new Date().getFullYear() gets the current year 
    function handleAddCar(){

        const newCar = {year: carYear, 
                        make: carMake, 
                        model: carModel};

        setCars(c => [...c, newCar]);

// This section is to reset the fields after adding the car function is complete
        setCarYear(new Date().getFullYear());
        setCarMake("");
        setCarModel("");
    }

    function handleRemoveCar(index){
// .filter((_, i) => i !== index this reason for this is because there's no element that we are assigning an index to. 
// Since there's no index it allows us without too much of a check, can delete any item that doesn't match the item we're trying to reference. 
// the index won't ever match which means we can delete anything on our list. - idk if this last line is the correct way to think about it but i'll run with it for now.
        setCars(c => c.filter((_, i) => i !== index));
    }

    function handleYearChange(event){

        setCarYear(event.target.value);
    }

    function handleMakeChange(event){

        setCarMake(event.target.value);
    }

    function handleModelChange(event){

        setCarModel(event.target.value);
    }

    return (<div>

                <h2>List of Car Objects</h2>
                <ul>
                    {cars.map((car, index) => 
                        <li key={index} onClick={() => handleRemoveCar(index)}>
                            {car.year} {car.make} {car.model}
                        </li>)}
                </ul>

                <input type="number" value={carYear} onChange={handleYearChange}/><br/>
                <input type="text" value={carMake} onChange={handleMakeChange}
                       placeholder="Enter car make"/><br/>
                <input type="text" value={carModel} onChange={handleModelChange}
                       placeholder="Enter car model"/><br/>
                <button onClick={handleAddCar}>Add Car</button>
            </div>);
}

export default MyComponent;