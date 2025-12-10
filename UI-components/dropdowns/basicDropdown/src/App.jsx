import Dropdown from './components/dropdown'

function App() {

const BinfoRD = [

  { id:0, text: "Button #1", content:["1","2","3"]},
  { id:1, text: "Button #2", content:["4","5","6"]},
  { id:2, text: "Button #3", content:["7","8","9"]},
];

  return (
    <div className="page-container">
      <h1>Sanity Tag</h1>
      <Dropdown DropdownPackage={BinfoRD[0]}/>
      <Dropdown DropdownPackage={BinfoRD[1]}/>
      <Dropdown DropdownPackage={BinfoRD[2]}/>
    </div>
  )
}

export default App

// https://www.youtube.com/watch?v=iLmIx2HHQwU - 9:30 starts the outside click to close
// https://github.com/WebDevBey/react-dropdown-menu/blob/main/src/components/Dropdown.jsx

{/* {BinfoRD.map((andSons,id))} */}
    {/* key={id}
      text={andSons.text}
      content={andSons.content} */}