import React, { useState } from 'react';

function MyComponent() {

    const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);

    function handleAddFood(){

        const newFood = document.getElementById("foodInput").value;

        document.getElementById("foodInput").value = ""; //this line helps reset the input field by marking it as an empty string
        setFoods(f => [...f, newFood]);
    }



    function handleRemoveFood(index){

        setFoods(foods.filter((_, i) => i !== index));
    //  at this moment I don't know what the .filter element is doing for this function exactly along with the i !== index
    //  whenever there's a parameter that has an underscore in its place it means that the parameter is ignored
    }

    return (<div>

                <h2>List of Food</h2>
                <ul>
                    {foods.map((food, index) => 
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                    {/* react wants a key to help keep track of each list item(li) */}
                    {/* using index is the numerical placement of each item which give them an easy key to work with */}
                        {food}
                    </li>)}
                </ul>

                <input type="text" id="foodInput" placeholder="Enter food name"/>
                <button onClick={handleAddFood}>Add Food</button>
            </div>);
}

export default MyComponent;