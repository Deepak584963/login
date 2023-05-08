import React from 'react'
import {NavLink } from 'react-router-dom'
import { useContext } from 'react'
import { appContext } from "../App";
function Routs() {
  const user = useContext(appContext)
  if (user) {
   return <div className="navbar-nav">
   <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
   <NavLink className="nav-item nav-link" to="/about">about</NavLink>
   <NavLink className="nav-item nav-link" to="/login">login</NavLink>
   <NavLink className="nav-item nav-link" to="/register">register</NavLink>
   <NavLink className="nav-item nav-link" to="/ContactUs">ContactUs</NavLink>
   <NavLink className="nav-item nav-link" to="/Logout">Logout</NavLink>
 </div>
   
  } else {
    return <div className="navbar-nav">
    <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
    <NavLink className="nav-item nav-link" to="/about">about</NavLink>
    <NavLink className="nav-item nav-link" to="/login">login</NavLink>
    <NavLink className="nav-item nav-link" to="/register">register</NavLink>
    <NavLink className="nav-item nav-link" to="/ContactUs">ContactUs</NavLink>
    <NavLink className="nav-item nav-link" to="/Logout">Login</NavLink>
  </div>
  }
}
export default function Navebar() {
  return (
    <>
 <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="/">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <NavLink className="nav-item nav-link active" to="/">Home <span className="sr-only">(current)</span></NavLink>
      <NavLink className="nav-item nav-link" to="/about">about</NavLink>
      <NavLink className="nav-item nav-link" to="/login">login</NavLink>
      <NavLink className="nav-item nav-link" to="/register">register</NavLink>
      <NavLink className="nav-item nav-link" to="/ContactUs">ContactUs</NavLink>
      <NavLink className="nav-item nav-link" to="/Logout">Logout</NavLink>
    </div>
  </div>
</nav>
    </>
  )
}
