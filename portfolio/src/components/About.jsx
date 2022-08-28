import React, { Component } from 'react'

export class About extends Component {
  constructor(){
    super();

    this.state = {
      beginningStudyDate: '',
      currentDate: '',
      days: '',
    }
  }

  componentDidMount() {
    const days = this.handleStudyTime()

    this.setState({
      days,
    })
  }

  handleStudyTime () {
    const beginningStudyDate  = '02-02-2022';
    const currentDate  = Date.now();
    const differenceInMileseconds = currentDate - new Date(beginningStudyDate)
    const differenceInMonths = differenceInMileseconds / (1000 * 60 * 60 * 24 * 30);
    
    return Math.round(differenceInMonths);
  }

  render() {
    const { days } =  this.state
    return (
      <main>
        <h3>Quem sou eu?</h3>
        <p>Eu sou o Paulo, e estou estudando Desenvolvimento Web há {days} meses</p>
      </main>
    )
  }
}

export default About
