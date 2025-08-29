import Navbar from "../component/navbar"
import Contact from "../pages/contact"
import Hobbies from "../pages/hobbies"
import Twitch from "../pages/twitch"
import Summary from "../pages/summary"
import Projects from "../pages/coding-projects"
import {Route, Routes} from "react-router-dom"

function App() {

  return (
    <>
      <Navbar/>
      <div>
        <Routes>
          <Route path="/" element={<Summary />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/Twitch" element={<Twitch />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </>
  )
}

export default App
// https://www.youtube.com/watch?v=SLfhMt5OUPI - video reference for this navbar