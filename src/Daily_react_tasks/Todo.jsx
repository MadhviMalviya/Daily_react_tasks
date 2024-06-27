import React, { useState } from 'react'
function Todo() {
    const [task, setTask] = useState([])
    const [value, setValue] = useState('')

    function handleChangeInput(e) {
        setValue(e.target.value)
    }
    function handleAdd() {
        setTask([...task, value])
        setValue('')

    }
    function handleDelete() {
        let newArr = task.slice(0, -1)
        setTask(newArr)

    }
    return (
        <>
            <form onSubmit={(e) => e.preventDefault()} >
                <input value={value} onChange={handleChangeInput} type="text" />
                <button onClick={handleAdd}>Add</button>
                <button onClick={handleDelete}>Undo</button>
            </form>
            {task.map((item, index) => {
                return <li key={index}>{item}</li>
            })}

        </>
    )
}

export default Todo
