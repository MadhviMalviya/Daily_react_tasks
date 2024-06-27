import React, { useState, useEffect } from 'react'
function Tokenbtn() {
    const [token, setToken] = useState('')
    const [isdisable, setIsDisable] = useState(false)

    function handleGenerateToken() {
        let tok = Math.floor((Math.random() * 100000) + 100000)
        setToken(tok)
        console.log(token, "hi")
        setIsDisable(true)
        localStorage.setItem("token", tok)
    }

    useEffect(() => {
        let storedToken = localStorage.getItem("token")
        if (storedToken) {
            setToken(storedToken)
            setIsDisable(true)
        }
    }, [])

    return (
        <div>
            <h1>Token Generator</h1>
            <p  > Token is : {token}</p>
            <button disabled={isdisable} onClick={handleGenerateToken}>Generate</button>
        </div>
    )
}

export default Tokenbtn



