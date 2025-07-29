import { TodoCard } from "./TodoCard";
// you can add multiples of the card for how many times you need to return that div in specific.
// example: <div> <TodoCard/> <TodoCard/> <TodoCard/> <TodoCard/> </div>

export function TodoList(props) {
    const { todos, selectedTab } = props
    

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
                const tempTodoIndex = todos.findIndex(val => val.input == todo.input)
                console.log(tempTodoIndex)
                {/*finding an index like this has it's limitations and in later courses we learn a more sophisticated way of doing it 
                    (the limitation is that the code might misbehave if you have two todos with the exact same text :) See if you can figure out why!)*/}
                return (
                    <TodoCard // this is ready to pass the information to the TodoCard Components
                        key={todoIndex}
                        {...props}
                        todoIndex={tempTodoIndex}
                        todo={todo} />  // spread operators ex:{...props} must be at the end of a list of argument
                                        // what ever the parent arugement is receiving also add them here at the end.
                                        // you can replace the todo={todo}
                )
            })}

        </>
    )
}