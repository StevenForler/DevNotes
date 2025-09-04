import {Routes, Route} from "react-router-dom";
import { Navbar } from "../component/navbar";
import {Projects} from "../pages/coding-projects";
import {Twitch} from "../pages/twitch";
import {Home} from "../pages/home";
import {Hobbies} from "../pages/hobbies";
import {Contact} from "../pages/contact";

function App() {
  return (
    <div /*CSS stuff goes here */>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/hobbies" element={<Hobbies/>} />
        <Route path="/twitch" element={<Twitch/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  )
}

export default App


//https://www.youtube.com/watch?v=17l6AOc8s10 - main navigation header