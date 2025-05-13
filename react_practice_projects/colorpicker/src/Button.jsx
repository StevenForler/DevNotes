import react, { useState } from "react";

function button (){
    const [favorite,setFavorite]=useState(false)
    const [stats,setStats]=useState(false)  


    return(
    <div>
        <button>Red</button> 
        <button>Green</button> 
        <button>Blue</button> 
        <button>Random</button> 
    </div>
    );
}

export default button

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