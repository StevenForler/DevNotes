import { Navbar } from "../component/navbar"
import {Route, Routes} from "react-router-dom"
import {Home} from "../pages";



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

/* for reasons unknown adding more routes and or imports is causing page to not load anything

update: it seems only the home page works to make the navbar load appropriately

import {Projects} from "../pages/coding-projects";
import {Hobbies} from "../pages/hobbies";
import {Twitch} from "../pages/twitch";
import {Contact} from "../pages/contact";


<Route path="/projects" element={<Projects/>}/>
<Route path="/hobbies" element={<Hobbies/>}/>
<Route path="/twitch" element={<Twitch/>}/>
<Route path="/contact" element={<Contact/>}/>*/