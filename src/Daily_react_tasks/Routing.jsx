import React from 'react'
import { Link } from 'react-router-dom'

function Router() {
  return (
    <div style={{ display: 'flex', gap: '1rem' }} >
      <Link to='/'>DisplayApi</Link>
      <Link to='/todo'>Todo</Link>
      <Link to='/phonebook'>phonebook</Link>
      <Link to='/searchitem'>Search Item</Link>
      <Link to='/todoapp'>To do App</Link>
      <Link to='addeditdelete'>Add Edit Delete</Link>
      <Link to='/counter'>Counter</Link>
      <Link to='/colorchange'>Color change</Link>
      <Link to='/clickchange'>Click change</Link>
      <Link to='/location'>Location</Link>
      <Link to='/contact'>Contact</Link>
      <Link to='/showcountry'>ShowCountry</Link>
      <Link to='/nav'>Nav Form Data</Link>
      <Link to='/registration'>Registration</Link>
      <Link to={'/tokenbtn'} >Tokenbutton</Link>
      <Link to='/imageupload'>imageupload </Link>


    </div>
  )
}

export default Router
