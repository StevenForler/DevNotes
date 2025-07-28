export function Header(props) {
    const { todos } = props
    const todosLength = todos.length // this counts the elements in the array and passed a count of the total of intems in the variable passed through an arguement.

    const isTasksPlural = todos.length !=1

    const taskOrTasks = isTasksPlural ? 'tasks' : 'task'
    
    return(
        <header className="text-gradient">You have {todosLength} open {taskOrTasks}.</header>
    )
}