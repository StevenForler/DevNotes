import { Route, Routes } from "react-router-dom";
import { Navbar } from "../component/navbar";
import { About, Contact, Home, Services } from "../pages";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;

//https://www.youtube.com/watch?v=17l6AOc8s10 