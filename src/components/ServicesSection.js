import react from '../img/reactjs-icon.svg'
import symfony from '../img/symfony-icon.svg'
import android from '../img/android-icon.svg'
import javascript from '../img/javascript-icon.svg'
import cv from '../img/RomainPani_CVAlternance-1.png'

import styled from 'styled-components'
import { About, Description, ImageCV, Hide } from '../styles'
import { fade } from '../animation'
import { useScroll } from './useScroll'

const ServicesSection = () => {
  const [element, controls] = useScroll()
  return (
    <Services variants={fade} animate={controls} initial="hidden" ref={element}>
      <Description>
        <h2>
          Mes <span>compétences</span>
        </h2>
        <Cards>
          <Card>
            <div className="icon">
              <img src={react} alt="horloge icon" />
              <h3>React</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={symfony} alt="teamwork icon" />
              <h3>Symfony</h3>
            </div>
          </Card>
          <Card>
            <div className="icon">
              <img src={android} alt="diaphragm icon" />
              <h3>Développement Mobile</h3>
            </div>
            <p></p>
          </Card>
          <Card>
            <div className="icon">
              <img src={javascript} alt="money icon" />
              <h3>Javascript</h3>
            </div>
          </Card>
        </Cards>
      </Description>
      <ImageCV>
        <img src={cv} alt="cam" />
      </ImageCV>
    </Services>
  )
}

const Services = styled(About)`
  h2 {
    padding-bottom: 5rem;
  }
  p {
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
  }
`

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 1300px) {
    justify-content: center;
  }
`
const Card = styled.div`
  flex-basis: 20rem;
  .icon {
    display: flex;
    align-items: center;
    margin-bottom: 100px;
    h3 {
      margin-left: 1rem;
      background: white;
      color: black;
      padding: 1rem;
    }
  }
`
export default ServicesSection
