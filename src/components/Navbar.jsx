import React from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className='nav__div'>
          <h4>Tasty</h4>
        </div>
        <ul className='Text__ul'>
          <Link to='/' className='directior'>Home</Link>
          <Link to='/admin' className='directior'>Admin</Link>
          <Link to='/favorites' className='directior'>Favorites</Link>
          <li>Menu</li>
          <li>Specialties</li>
          <li>Reservation</li>
          <li>Blog</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar