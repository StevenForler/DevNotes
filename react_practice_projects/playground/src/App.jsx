import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './Pages/Home'
import { Page1 } from './Pages/Page1'
import { Page2 } from './Pages/Page2'
import { Page3 } from './Pages/Page3.jsx'
// to test the pages without navigation buttons put "/*" in front of the URL
// example: 127.0.0.1:5173/*/Page1

function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Page1" element={<Page1/>} />
        <Route path="/Page2" element={<Page2/>} />
        <Route path="/Page3" element={<Page3/>} />
      </Routes>
    </Router>
  )
}

export default App
