import react, { useState } from "react";

function color (){
    const [color,setColor]=useState("")
    const [hexCode, setHexCode]=useState("")
    const [message, setMessage]=useState("")
    const inputColor = (event) =>{
        let colorHex = event.target.value
        if(colorHex.match(/^#[0-9a-f]{6}$/i)){
            colorHex += "ff"
        }
        colorHex = namedColorToHex(colorHex)
        if(colorHex === null){
            setHexCode("#FFFFFF")
            setMessage("invalid HTML color")
        }
        else{
            setHexCode(colorHex)
            setMessage(colorHex.toUpperCase())
        }
        setColor(event.target.value)    
    }
    


    const namedColorToHex = (colorname) => {
        const context = document.createElement("canvas").getContext("2d");
        context.fillStyle = colorname;
        const hexcode = context.fillStyle.toLowerCase();

        if (
            (hexcode == colorname.toLowerCase()) ||
            (
            (colorname.toLowerCase() != "black") &&
            (hexcode == "#000000")
            )
        ) {
            return (null);
        }
        return (hexcode);
    }

    return( 
    <>
    <div className="color-container">
        {/* add title of app */}
    <div className="color-location" style={{backgroundColor: hexCode}} >
         <p>color input: {message}</p>
    </div>
        {/* ad a label */}
        <input value={color} onChange={inputColor} placeholder="insert color here..." />
        <p>Please only use color name or hexcodes.</p>
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