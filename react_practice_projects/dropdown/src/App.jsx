import './App.css'
import Dropdown from '../components/dropdown/dropdown'

function App() {
  

  return (
    <div>
      <Dropdown buttonText="Button" content={<p>Hello!</p>}/>
    </div>
  )
}

export default App
