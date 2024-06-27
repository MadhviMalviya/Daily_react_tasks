import React, { useState } from 'react'

function TodoApp() {

    const [list, setList] = useState([])
    const [input, setInput] = useState('')
    const [uid, setUid] = useState()
    const[update,setUpdate]=useState(false)

    function handleInput(e) {
        setInput(e.target.value)
    }

    function handleTask() {
        setList([...list, input])
        setInput('')
    }

    function handleDelete(i) {
        let del = list.filter((any) => any !== list[i])
        setList(del)   
    } 

    function handleUpdate() { 
        list.splice(uid, 1, input);
        setInput('')
        setUpdate(false)
    }

    function handleEdit(i) {
        setInput(list[i])
        setUid(i)
        setUpdate(true)
    }

    return (
        <>
    
            <h1>Todo App</h1>
            <div className='container'>
                <div className='inputbox'>
                    <input type='text' value={input} onChange={handleInput} placeholder='enter task' />{update ? <button onClick={handleUpdate}>Update</button> : <button onClick={handleTask}>Add task</button>}
                    
                   
                </div>

                <div className='list' >
                    <ul>
                        {list.map((item, z) => {
                            return <li onClick={() => handleDelete(z)}>{item} X</li>
                          
                        })}
                    </ul>

                </div>

            </div>
 

        </>
    )
}

export default TodoApp