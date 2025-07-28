import { TodoCard } from "./TodoCard";
// you can add multiples of the card for how many times you need to return that div in specific.
// example: <div> <TodoCard/> <TodoCard/> <TodoCard/> <TodoCard/> </div>

export function TodoList() {
    return(
        <div>
        <TodoCard/>
        </div>
    )
}