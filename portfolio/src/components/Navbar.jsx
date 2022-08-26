import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Logo_light from '../images/pege-logos/logo-light.png'

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <img src={Logo_light} alt='logo pegê' width='150px'/>
        <Link to="/">Quem sou eu</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/wallpapers">Wallpapers</Link>
      </nav>
    )
  }
}

export default Navbar
