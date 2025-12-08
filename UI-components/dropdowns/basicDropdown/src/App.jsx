import { useState } from 'react'
import Dropdown from './components/dropdown'
// https://www.youtube.com/watch?v=iLmIx2HHQwU - 9:30 starts the outside click to close
// https://github.com/WebDevBey/react-dropdown-menu/blob/main/src/components/Dropdown.jsx

function App() {

const binfo = [

  { id:0, text: "Button #1"},
  { id:1, text: "Button #2"},
  { id:2, text: "Button #3"},
];

  return (
    <div className="page-container">
      <Dropdown ButtonInfo={binfo}/>
    </div>
  )
}

export default App

//  <button>here's a button</button>
//       <div className="dropdowninfo">
//         <p>Apple</p>
//         <p>Kiwi</p>
//         <p>Pineapple</p>
//         <p>Banana</p>
//         <p>Strawberry</p>
//       </div>
