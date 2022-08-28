import React, { Component } from 'react'
import pegePhoto from '../images/pege-about-pic/pege-photo.jpg'

export class About extends Component {
  constructor(){
    super();

    this.state = {
      studiedDays: '',
    }
  }

  componentDidMount() {
    const studiedDays = this.handleStudyTime()

    this.setState({
      studiedDays,
    })
  }

  handleStudyTime () {
    const START_OF_STUDIES  = new Date('02-02-2022');
    const CURRENT_DAY  = Date.now();

    const differenceInMileseconds = CURRENT_DAY - START_OF_STUDIES;
    const differenceInMonths = differenceInMileseconds / (1000 * 60 * 60 * 24 * 30); // MILESECOND * MINUTE * HOURS * DAY * MONTH
    
    return Math.round(differenceInMonths);
  }

  render() {
    const { studiedDays } =  this.state
    return (
      <main>
        <div>
          <h3>Quem sou eu?</h3>

          <p>Eu sou o Paulo Guilherme, e estou estudando Desenvolvimento Web há { studiedDays } meses. Sou apaixonado em criar, automatizar e entender como as coisas funcionam. Nas horas vagas sou criador de conteúdo.
          </p>

          <p>
            Aqui você pode encontrar mais sobre o meu trabalho:
          </p>

          <p>
            <a href="https://www.linkedin.com/in/pguilhermef/" target="_blank" rel="noreferrer" ><strong>LinkedIn</strong></a>
            <span><strong>-</strong></span>
            <a href="https://github.com/pguilhermef" target="_blank" rel="noreferrer" ><strong>Github</strong></a>
            <span><strong>-</strong></span>
            <a href="https://www.instagram.com/pege.dev/" target="_blank" rel="noreferrer" ><strong>Instagram</strong></a>
            <span><strong>-</strong></span>
            <a href="https://www.tiktok.com/@pege.dev/" target="_blank" rel="noreferrer" ><strong>Tik Tok</strong></a>
          </p>
        </div>
        <div>
          <img src={pegePhoto} alt='Foto de Paulo Guilherme Fidelis' width='600px'/>
        </div>
      </main>
    )
  }
}

export default About
