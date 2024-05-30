import React, { useState } from 'react'

function Phonebook() {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [phonebook, setPhonebook] = useState([])

    function handleNameChange(e) {
        setName(e.target.value)
    }
    function handlePhoneChange(e) {
        setPhone(e.target.value)
    }

    function displayContacts() {
        if (phone !== null && phone.length !== 10) {
            alert('please enter a valid number!')
        } else {
            setPhonebook(prevphoneBook => [...prevphoneBook, { name, phone }])
            setName('')
            setPhone('') //we passed setName(''),setPhone('')TO empty inputbox after entering valueS
        }
    }
    return (
        <>
            <h1>Phonebook</h1>
            <label>Name:</label>
            <input value={name} onChange={handleNameChange} type='text' placeholder='name' />
            <br />
            <label>Phone:</label>
            <input value={phone} onChange={handlePhoneChange} type='number' placeholder='phone' /><br />
            <button onClick={displayContacts}>Add Contact</button>
            <pre></pre>
            <h1>Contacts</h1>
            {phonebook.map((x, index) => {
                return <div key={index}>
                    <li>{x.name} : {x.phone} </li>
                </div>
            })}


        </>


    )
}

export default Phonebook
