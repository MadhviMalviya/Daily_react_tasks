import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Contact() {
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [user, setUsers] = useState([])

    const nav = useNavigate()

    function handleEmail(e) {
        setEmail(e.target.value)
    }
    function handlePhone(e) {
        setPhone(e.target.value)
    }

    function handleFormSubmit() {
        if (email === '' || phone === '') {
            alert('Please enter email and phone number')
        } else if (email.length < 8) {
            alert('please enter a valid email')
        } else if (phone.length < 10 ||phone.length > 10) {
            alert('please enter a valid phone number')
        } else if (!email.includes('@')) {
            alert('enter valid email')
        } else if (isNaN(phone)) {
            alert('please enter digits only')
        } else {
            const newUser =
            {
                email: email,
                phone: phone
            }
       
        setUsers([...user, newUser])
            setEmail('')
            setPhone('')
        nav('/nav',{state:newUser})

    } 

    }
    return (
        <>
            <div>
                <h1>Contact form</h1>
                <input placeholder='Enter email...' value={email} onChange={handleEmail} type="email"></input><br></br>
                <input placeholder='Enter phone...' value={phone} onChange={handlePhone} type='phone'></input>
                <pre></pre>
                <button type="submit" onClick={handleFormSubmit} >submit</button>
            </div>

            {user.map((item, index) => {
                return <div key={index}>
                    <li>{item.email} : {item.phone} </li>
                </div>
            })}
           
        </>
    )
}

export default Contact