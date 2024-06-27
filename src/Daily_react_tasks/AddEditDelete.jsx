import React, { useState } from 'react'

// to have functionality add edit and delete

function AddEditDelete() {
    const [data, setData] = useState([])
    const [additems, setItems] = useState('')
    const [edit, setEdit] = useState(false)
 

    function handleInput(e) {
        setItems(e.target.value)
    }

    function add() {
        setData([...data, additems])
        setItems('')

    }

    function editfn(d) {
        setItems(data[d])
        setEdit(true)
      
    }

    function deletefn() {
        let newArr = data.slice(0, -1)
        setData(newArr)
    
    }
    return (
        <>
            <h1>Add Edit Delete </h1>
            <input onChange={handleInput} type='text' ></input>
            <button onClick={add} >Add</button>
            
            {data.map((item, value) => {
                return <div key={value} >
                    <li>{item}</li>
                    <button onClick={editfn} >Edit</button>
                    <button onClick={deletefn} >Delete</button>
                </div>
            })}
        </>
    )
}

export default AddEditDelete
