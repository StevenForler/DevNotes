import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { home } from './Pages/Home'
import { home } from './Pages/Page1'
import { home } from './Pages/Page2'
import { home } from './Pages/Page3'
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
