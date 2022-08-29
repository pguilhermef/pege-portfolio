import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class NotFound extends Component {
  render() {
    return (
      
      <>
        <h1>404</h1>

        <h3>
          Desculpe essa página estava cansada de sua rotina e decidiu viajar. Infelizmente ela não se encontra.
        </h3>

        <Link to="/">Página Inicial</Link>
      </>
    )
  }
}

export default NotFound
