import React, { useState } from 'react'

function ClickChange() {
    const [txt, setTxt] = useState('')
    const [color, setColor] = useState('gray')

    function handleInputChange(e) {
        setTxt(e.target.value)
    }
    function changeColor() {
        setColor(txt)
        
    }

    return (
        <>
            <div style={{ width: '200px', height: '200px', border: '3px' ,background:color}} ></div>
            <input  type='text' onChange={handleInputChange}></input>
            <button onClick={changeColor}>Change</button>
        </>
    )
}

export default ClickChange







// both functionality


// export default function App() {
//   const [color, setColor] = useState('green');
//   const [text, setText] = useState('Type any color');
//   function handleColor(i) {
//     setColor(i.target.value);
//   }

//   function clickColorChange() {
//     setText(color);
   
//   }
//   return (
//     <div>
//       <h1 style={{ color: color }}>Hello StackBlitz!</h1>
//       <p>{color}</p>

//       <input type="text" onChange={handleColor} />

//       <h1 style={{ color: text }}>{text} </h1>
//       <button onClick={clickColorChange}>Change color</button>
//     </div>
//   );
// }
