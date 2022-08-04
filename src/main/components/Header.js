import React from 'react'
import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <>
 {/* <nav classNameName="navbar navbar-light bg-dark">
 <NavLink ="text-light " style={{textDecoration:"none"}} to="/product">Show Product</NavLink>
<NavLink  classNameName="text-light" style={{textDecoration:"none", }} to="/product/create">Add Product</NavLink>
<NavLink  classNameName="text-light" style={{textDecoration:"none", }} to="/About">About</NavLink>
      
  </nav> */}

    <nav className="navbar navbar-expand-lg bg-dark">
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      
    <li className="nav-item text-light p-2">
      <NavLink className="text-light "  style={{textDecoration:"none" }}  to="/">Home</NavLink>
      </li>

      <li className="nav-item text-light p-2">
      <NavLink  className="text-light" style={{textDecoration:"none", }} to="/Employee/create">Add Employee</NavLink>
      </li>

      <li className="nav-item text-light p-2">
      <NavLink className="text-light " style={{textDecoration:"none"}} to="/Employee">Show Employee</NavLink>
      </li>
      
    <li className="nav-item active text-light p-2">
        <NavLink style={{textDecoration:"none"}}  className="text-light" to="/Project">Projects</NavLink>
      </li>
      
      <li className="nav-item active text-light p-2">
        <NavLink style={{textDecoration:"none"}}  className="text-light" to="/about">About</NavLink>
      </li>
      </ul>
  </div>
</nav>
    </>
  )
}

export default Header