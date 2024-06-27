import React, { useState } from 'react';
function ColorChange() {
    const [color, setColor] = useState('gray');

    function handleInputChange(e) {
        setColor(e.target.value);
    }

    return (
        <>
            <div style={{
                height: '200px', width: '200px', border: '2px solid black', backgroundColor: color
            }} ></div>
            <div style={{ height: '50px', width: '200px', border: '2px solid black' }}>
                <p>{color}</p></div>

            <input
                type='text'
                onChange={handleInputChange}
                value={color}
                placeholder="Enter a color..."
            />

        </>
    );
}

export default ColorChange;
