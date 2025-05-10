
function Food(){
// to add javascript within a return element. You have to use {} to allow for JS code
// but not in the return element you can just write Vanilia JS code
    const food1 = "orange";

    const food2 = "banana";

    return(
        <ul>
            <li>Apple</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food