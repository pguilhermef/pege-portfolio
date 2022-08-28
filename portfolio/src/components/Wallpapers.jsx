import React, { Component } from 'react'
import Image from './tools/Image'
import pegePhoto from '../images/pege-about-pic/pege-photo.jpg'

export class Wallpapers extends Component {
  render() {
    return (
      <Image
      image={pegePhoto}
      description={'o mais lindo'}
      downloadName={'pegaopato'}
      />
    )
  }
}

export default Wallpapers
