import React, { Component } from 'react'
import Project from './tools/Project'
import solarSystem from '../images/projects-thumbnails/solar-system-project.png'

export class Projects extends Component {
  render() {
    return (
      <Project
      projectLink='https://github.com/pguilhermef/solar-system-project'
      thumbnail={solarSystem}
      alt='Pré visualização do projeto Sistema Solar'
      description='Projeto feito utilizando React. Meus primeiros conceitos aprendidos nesta incrível tecnologia estão presentes neste projeto.'
      />
    )
  }
}

export default Projects
