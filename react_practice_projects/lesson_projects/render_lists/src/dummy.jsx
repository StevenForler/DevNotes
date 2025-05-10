// this is what building a list looks like in a separate component
// this method doesn't make this component easily reuseable with other lists

function List(){
    // 
    const fruits=   [{id: 1, name: "apple", calories: 95},
                    {id: 2, name: "orange", calories: 45},
                    {id: 3, name: "banana", calories: 105},
                    {id: 4, name: "coconut", calories: 159}, 
                    {id: 5, name: "pineapple", calories: 37}];
    
    // fruits.sort((a,b) => a.name.localeCompare(b.name)); Alphabetical
    // fruits.sort((a,b) => b.name.localeCompare(a.name)); // reverse Alphabetical
    // fruits.sort((a,b) => a.calories - b.calories); // calorie ascending order
    // fruits.sort((a,b) => b.calories - a.calories); // calorie descending order

    // const lowCalFruits = fruits.filter(fruit => fruit.calories < 100);// filtering method
    // const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);
    
    // fruits.sort(); : the .sort method sorts lexicographically so this won't work with numbers
    // React needs unique keys so that it can know what is being added or removed
    const listItems = fruits.map(fruits => <li key={fruits.id}>
                                                {fruits.name}: &nbsp;
                                                <b>{fruits.calories}</b></li>)
    return(<ol>{listItems}</ol>)
}

export default List