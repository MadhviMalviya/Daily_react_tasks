import React, { useState } from 'react'

function Counter() {
    const [count, setCount] = useState(10)
    function IncrementCount() {
        setCount(count + 1);
    }
    function DecrementCount() {
        setCount(count - 1);
    }
    return (
        <div>
            <h1>Counter</h1>
            <h2>{count}</h2>
            <button onClick={IncrementCount} >+</button>
            <button onClick={DecrementCount} >-</button>
        </div>
    )
}

export default Counter
