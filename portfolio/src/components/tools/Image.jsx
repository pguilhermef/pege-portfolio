import React, { Component } from 'react'

export class Image extends Component {
  render() {
    const { image, description, downloadName } = this.props

    return (
      <>
        <img
          src={image}
          alt={description}
        />
          
        <a
          href={image}
          download={downloadName}>
          Download!
        </a>
      </>
    )
  }
}

export default Image
