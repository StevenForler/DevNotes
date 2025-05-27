import react, { useState } from "react";

function colorNameToHex (color){
    
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
};

export default colorNameToHex