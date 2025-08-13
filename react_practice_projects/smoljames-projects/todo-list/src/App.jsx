import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

import { useState, useEffect } from 'react'

function App() {
  // const todos = [
  // { input: 'Hello! Add your first todo!', complete: true },
  // { input: 'Get the groceries!', complete: false },
  // { input: 'Learn how to web design', complete: false },
  // { input: 'Say hi to gran gran', complete: true },
  // ]

  const [todos, setTodos] = useState([
    { input: 'Hello! Add your first todo!', complete: true }
  ])
  const [selectedTab, setSelectedTab] = useState('Open') // the quick and dirty explanation for usestate syntax is the value and setter function is basically array destructuring 

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, { input: newTodo, complete: false }]
    setTodos(newTodoList)
    handleSaveData(newTodoList)
  }

  function handleCompleteTodo(index) { // don't forget to pass this as a prop to get it into the todoCard
    // update/edit/modify
    let newTodoList = [...todos]
    let completedTodo = todos[index]
    completedTodo['complete'] = true
    newTodoList[index] = completedTodo // this is to override the previous todo list items with the new ones whle giving in this region  that was 
    setTodos(newTodoList) // this override sets the new todos within the setter function to update the todo list with the completed task
    handleSaveData(newTodoList)
  }

  function handleEditTodo(index) {
    // step 1 - create a duplicate array
    // step 2 - create a new variable and assign the current value of the todo that needs editing to it
    // step 3 - set the input value equal to the current value of the todo in question
    // step 4 - copy the delete functionality and filter out the todo @ index from the duplicate array
    // step 5 - set the todo state equal to the filtered duplicate array
    // step 6 - now the user can edit the todo and re-add it when satisfied
  }

  function handleDeleteTodo(index) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== index
    })
    setTodos(newTodoList)
    {/*since you can't modify the original list we have to override it. to do this we pass this settodos as a prop.
      We will need to drill it down trhough toDoList to reach TodoCard until you can  
      the drill path: 
      pass the funtion as a prop in app.jsx for the todolist export
      in the todolist add the spread operator for props{...props} to the todocard export
      then destructure the handleDeleteTodo in TodoCard and pass it as a prop in the button tag
      you also have to pass the todoIndex from toDoList so that it knows if it can delete the card or not.
      */}
    handleSaveData(newTodoList)
  }

  function handleSaveData(currTodos) {
    localStorage.setItem('todo-app', JSON.stringify({ todos: currTodos }))
  }
      {/* you have to make the item you're trying to pass into your assigned key('todo-app') an object {todos}
        then you can convert anything that passes though said object to store it as a json.string store all your items or todos to  chrome's local storage.
        hey did you know, you can assign things to the key. { todos(key): currTodos(assigned term) } 
        this can be used to pass an arugement through the function without having to using too similar names for 2 different  com
        */}

  {/*useEffect(() => {})
    This is the basic arguement for useEffect which can ad additional arugements wtih a ","
    as it is, this will run the function after every re-render(everytime the page loads)
    however you can add depencencies to make this only run when you need it to
    useEffect(() => {}, []) - this makes it run only on mount/initilization of the webpage
    useEffect(() => {}, [value]) - When you add a value not only will it run on mount, it will need to meet the depenency's requirements to run it as well 
  */}

  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todo-app')) { return } // guard clause. Basically states: If it there is no local storage of it does find local storage but cant find the item todo-app it will return and run through until it can
    let db = JSON.parse(localStorage.getItem('todo-app'))
    setTodos(db.todos)
  }, [])
  return (
    <> 
      <Header todos={todos}/> {/*properties aka props can be thought of as taking exisitng variables and applying those to components to help pass info to a child element. in this case this is an attribute style property*/}
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handleCompleteTodo={handleCompleteTodo} handleDeleteTodo={handleDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handleAddTodo={handleAddTodo} /> {/*you could define the todo function in TodoInput but it would be messy as you would have to grab the state from  within the TodoList that is also in the TodoInput to get the extra list items */}
    </>
  )
}

export default App
