import { Navbar } from "../component/navbar"
import {Route, Routes} from "react-router-dom"
import {Home} from "../pages/home";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>

    </div>
  )
}

export default App


//https://www.youtube.com/watch?v=17l6AOc8s10 - main navigation header