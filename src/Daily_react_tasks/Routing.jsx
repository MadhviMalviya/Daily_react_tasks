import React from 'react'
import { Link } from 'react-router-dom'

function Router() {
  return (
    <div style={{display:'flex', justifyContent:'space-evenly',marginBottom:'3rem '}} >
       <Link to='/'>DisplayApi</Link> 
       <Link to='/todo'>Todo</Link> 
       <Link to='/phonebook'>phonebook</Link>
       <Link to='/searchitem'>Search Item</Link>
       <Link to='/counter'>Counter</Link>
    </div>
  )
}

export default Router
