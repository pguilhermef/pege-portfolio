import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo_dark from '../images/pege-logos/logo-dark.png'
import '../css/Navbar.css'

export class Navbar extends Component {
  render() {
    return (
      <nav className='navbar'>
        <img className='logo' src={Logo_dark} alt='logo pegê' width='150px'/>
        <div className='navbar-links-container'>
          <Link to="/" className='navbar-link'>Quem sou eu</Link>
          <Link to="/projects" className='navbar-link'>Projetos</Link>
          <Link to="/wallpapers" className='navbar-link'>Wallpapers</Link>
        </div>
      </nav>
    )
  }
}

export default Navbar
