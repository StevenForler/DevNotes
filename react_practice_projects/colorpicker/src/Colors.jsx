import react, { useState } from "react";
// import Colornames from "./Colornames.jsx"

// integrate this to allow names convert to hex the input field
// function nameHexConvert(Colornames){
//     <Colornames/>
//     if (typeof colours[colour.toLowerCase()] != 'undefined')
//         return colours[colour.toLowerCase()];

//     return false;
// }

function color (){
    const [color,setColor]=useState("#9F2B68")

    const inputColor = (event) =>{
        setColor(event.target.value)
    }

    return( 
    <>
    <div className="color-container">
        {/* add title of app */}
    <div className="color-location" style={{backgroundColor: color}} >
         <p>color input: {color}</p>
    </div>
        {/* ad a label */}
        <input value={color} onChange={inputColor} placeholder="insert hexcode here..." />
    </div>
    </>
    );
}

export default color

// notes for next session reference usestate hooks project. make a separate div that the buttons can target.







// onClick={()=>{setFavorite(true)}} style={{backgroundColor:favorite==true?"orange":""}}>

// import { useState, useEffect } from 'react'
// function App() {
  
//   const [color, setColor] = useState("blue")
//   const click = color => {
//     setColor(color)
//   }
//   /* This is where we actually
//      change background color */
//   useEffect(() => {
//     document.body.style.backgroundColor = color
//   }, [color])
//   /* Display clickable
//       button */
//   return (<div className = "App">
//     <button onClick = {
//       () => click("yellow")
//     }>Change BG Color</button>
//   </div>)
// }
// export default App;


// class BoxComponent extends React.Component {
//     state = {
//         color: "blue",
//     };

//     onChange = () => {
//         this.setState({ color: "red" });
//     };

//     render() {
//         return (
//             <div
//                 style={{ backgroundColor: this.state.color, width: 20, height: 20, opacity: "50%" }}
//                 onClick={this.onChange}
//             />
//         );
//     }
// }