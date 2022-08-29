import React, { Component } from 'react'

export class Project extends Component {
  render() {
    const { projectLink, thumbnail, alt, description } = this.props;
    return (
      <>
        <a href={projectLink}>
          <img
            src={thumbnail}
            alt={alt} />
        </a>

        <p>
          {description}
        </p>
      </>
      
    )
  }
}

export default Project
