import React, { Component } from 'react'
import { GrInstagram, GrGithub } from 'react-icons/gr'
import { FaLinkedin } from 'react-icons/fa'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <p>Entre em contato!</p>
          <a href="mailto:pguilhermesanttos@gmail.com">pguilhermesanttos@gmail.com</a>
        </div>
        <div>
        <p>Redes Sociais:</p>
          <a href="https://www.linkedin.com/in/pguilhermef/" target="_blank" rel="noreferrer" ><FaLinkedin /></a>
          <a href="https://github.com/pguilhermef" target="_blank" rel="noreferrer" ><GrGithub /></a>
          <a href="https://www.instagram.com/pege.dev/" target="_blank" rel="noreferrer" ><GrInstagram /></a>
        </div>
      </footer>
    )
  }
}

export default Footer
