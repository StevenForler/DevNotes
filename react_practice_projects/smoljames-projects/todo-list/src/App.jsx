import { Header } from "./components/Header"
import { Tabs } from "./components/Tabs"
import { TodoInput } from "./components/TodoInput"
import { TodoList } from "./components/TodoList"

function App() {
  const todos = [ // information being passed through is easiest from parent to child and not possible to pass inform laterally 
  { input: 'Hello! Add your first todo!', complete: true },
  { input: 'Get the groceries!', complete: false },
  { input: 'Learn how to web design', complete: false },
  { input: 'Say hi to gran gran', complete: true },
  ]

  return (
    <> 
      <Header todos={todos}/> {/*properties aka props can be thought of as taking exisitng variables and applying those to components to help pass info to a child element. in this case this is an attribute style property*/}
      <Tabs todos={todos}/>
      <TodoList todos={todos}/>
      <TodoInput/>
    </>
  )
}

export default App
