import React from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";


function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className='nav__div'>
          <h4>Aranaz.</h4>
        </div>
        <ul className='Text__ul'>
          <Link to='/' className='directior'>Home</Link>
          <Link to='/admin' className='directior'>Admin</Link>
          <Link to='/favorites' className='directior'>Favorites</Link>
          <li>Shop</li>
          <li>Pages</li>
          <li>Blog</li>
          <li>Contact</li>
          <CiSearch />
          <CiHeart />
          <FaCartPlus />
        </ul>
      </nav>
    </>
  )
}

export default Navbar