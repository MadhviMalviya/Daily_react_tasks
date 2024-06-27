import React from 'react'
import { useLocation } from 'react-router-dom'

function Nav() {
    let loc = useLocation()
    const {email,phone} = loc.state||{}
   
  return (
      <div style={{display:'grid',gridTemplate:'2fr 1fr'}} >
          <h1>Form data</h1>
          <p>Email:{ email}</p>
          <p>phone:{ phone}</p>
      
      </div>
  )
}

export default Nav