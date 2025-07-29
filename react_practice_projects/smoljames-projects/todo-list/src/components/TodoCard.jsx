

export function TodoCard(props) {
    {/* const { todoIndex, todos } = props
        const  todo = todos[todoIndex]
        this is at minimum what you would need to bring the information from TodoList to here
        then you can console.log(todo) to see the tasks added to the console*/}
        
    const { todo, handleDeleteTodo, todoIndex, handleCompleteTodo } = props

    return (
        <div className="card todo-item">
            <p>{todo.input}</p>
            <div className="todo-buttons">
                <button onClick={() => {
                    handleCompleteTodo(todoIndex)
                }} disabled={todo.complete}>
                {/*disabled attribute you can pass an arguement through it to have the tag be no longer interactable */}
                    <h6>Done</h6>
                </button>
                <button onClick={() => {
                    handleDeleteTodo(todoIndex)
                }}>
                    <h6>Delete</h6>
                </button>
            </div>
        </div>
    )
}