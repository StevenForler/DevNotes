import { useState } from 'react'
import Dropdown from './components/dropdown/dropdown'
import "./App.css"
import DropdownItem from './components/dropdownItem/dropdownItem';


function App() {
  const items = [1,2,3,4,5,6,7,8];

  return (
    <div className="App">
      <div className="content">
        <Dropdown buttonText="Dropdown button" 
          content={<> 
            {items.map(item =><DropdownItem key={item}>
              {`Item ${item}`
            }</DropdownItem>)}</>}/>
      </div>
    </div>
  )
}

export default App
