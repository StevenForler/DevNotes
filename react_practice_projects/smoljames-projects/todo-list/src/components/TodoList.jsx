import { TodoCard } from "./TodoCard";
// you can add multiples of the card for how many times you need to return that div in specific.
// example: <div> <TodoCard/> <TodoCard/> <TodoCard/> <TodoCard/> </div>

export function TodoList(props) {
    const { todos, selectedTab } = props
    
    //replacing the const tab that was here with "selectedTab" this functionally now only shows what each tab should hold. 
    const filterTodosList = selectedTab === 'All' ?
        todos : // if the selected tab is equal to all then you just count all the todos
        selectedTab === 'Completed' ?
            todos.filter(val => val.complete) :
            //filters for all the completed tasks
            todos.filter(val => !val.complete)
            //leaving only the non-completed ones left

    return (
        <>
            {filterTodosList.map((todo, todoIndex) => { 
                {/* replacing "todos.map" with "filterTodosList.map" for line 19 help map only the relevent items 
                    while the filterToDoList variable on line 9 will remove all the irrelevent items */}  
                const tempTodoIndex = todos.findIndex(val => val.input == todo.input)   //when finding the index make sure that is grabbing from the original array instead of one that is being filtered. 
                                                                                        // this way it won't miss any items that are filtered out.
                console.log(tempTodoIndex)
                {/*finding an index like this has it's limitations and in later courses we learn a more sophisticated way of doing it 
                    (the limitation is that the code might misbehave if you have two todos with the exact same text :) See if you can figure out why!)*/}
                return (
                    <TodoCard // this is ready to pass the information to the TodoCard Components
                        key={todoIndex}
                        {...props}
                        todoIndex={tempTodoIndex} //you could also remove this line as well if you didn't use the spread operator
                        todo={todo} />  
                        // spread operators ex:{...props} must be at the end of a list of argument. what ever the parent arugement is receiving,
                        //                 also add them here at the end. If you didn't use spread operator which could make it a bit cleaner. To make it work, 
                        //                 you would have to go to the TodoCard component on line 9 and change the destructure to be just {todo}
                )
            })}

        </>
    )
}