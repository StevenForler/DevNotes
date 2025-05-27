// function namedColorToHex(colorname) {
//   const context = document.createElement("canvas").getContext("2d");
//   context.fillStyle = colorname;
//   hexcode = context.fillStyle.toLowerCase();
// -----------------------------------------------------
//   if (
//     (hexcode == colorname.toLowerCase()) ||
//     (
//       (colorname.toLowerCase() != "black") &&
//       (hexcode == "#000000")
//     )
//   ) {
//     return (null);
//   }
//   return (hexcode);
// }




// import React, { useState } from 'react';

// const colorNameToHex = (colorName) => {
//   const ctx = document.createElement("canvas").getContext("2d");
//   ctx.fillStyle = colorName;
//   return ctx.fillStyle;
// };

// const ColorConverter = () => {
//   const [colorName, setColorName] = useState('');
//   const [hexCode, setHexCode] = useState('');

//   const handleChange = (e) => {
//     const name = e.target.value;
//     setColorName(name);

//     try {
//       const hex = colorNameToHex(name);
//       setHexCode(hex);
//     } catch {
//       setHexCode('Invalid color name');
//     }
//   };

//   return (
//     <div style={{ padding: '20px', backgroundColor: hexCode || 'white' }}>
//       <h2>Color Name to Hex Code Converter</h2>
//       <input
//         type="text"
//         value={colorName}
//         onChange={handleChange}
//         placeholder="Enter color name (e.g., red, blue, gold)"
//       />
//       <p>
//         Hex Code: <strong>{hexCode}</strong>
//       </p>
//     </div>
//   );
// };

// export default ColorConverter;
