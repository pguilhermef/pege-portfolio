import React, { Component } from 'react'

export class About extends Component {
  handleBegginingDate () {
    const BEGINNING_STUDY_DATE = '02/02/2022'
    return BEGINNING_STUDY_DATE
  }

  handleActualDate () {
    const ACTUAL_TIME = new Date();
    
    const DAY = String(ACTUAL_TIME.getDate()).padStart(2, '0')
    const MONTH = String(ACTUAL_TIME.getMonth() + 1).padStart(2, '0')
    const YEAR = String(ACTUAL_TIME.getFullYear())

    const ACTUAL_DATE = `${DAY}/${MONTH}/${YEAR}`

    return ACTUAL_DATE;
  }

  handleStudyTime () {
    const BEGINNING_STUDY_DATE = new Date(this.handleBegginingDate())
    const ACTUAL_DATE = new Date(this.handleActualDate())
    const um = ACTUAL_DATE.getTime()
    const dois = BEGINNING_STUDY_DATE.getTime()
    console.log(Math.abs(um - dois));
  }

  render() {
    return (
      <main>
        <h3>Quem sou eu?</h3>
        <p>Eu sou o Paulo, e estou estudando Desenvolvimento Web há {this.handleStudyTime()}</p>
      </main>
    )
  }
}

export default About
