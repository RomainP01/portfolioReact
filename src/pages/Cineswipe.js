import styled from 'styled-components'

import { motion } from 'framer-motion'
import { pageAnimation } from '../animation'
import ScrollTop from '../components/ScrollTop'

import cineswipe from '../img/1.JPG'

const CineSwipe = () => {
  return (
    <>
      <Details
        exit="exit"
        variants={pageAnimation}
        initial="hidden"
        animate="show"
      >
        <ScrollTop />
        <Headline>
          <h2>CineSwipe</h2>
          <img src={cineswipe} alt="cineswipe" />
        </Headline>
        <Awards>
          <Award
            title="Le concept : "
            description="Vous avez du mal à trouver quel film regarder avec votre compagnon ?

            CineSwipe est la solution ! 
            
            A la manière d'un site de rencontre, il faut liker les films qu'on souhaite regarder.
            Lorsque les deux utilisateurs likent le meme film, il y a match ! "
            key="defi"
          />
          <Award
            title="Codée en 24 heures"
            description="L'application est issue d'un défi que je me suis posé : coder une application mobile en React en seulement une journée"
            key="defi"
          />
          <Award
            title="Technologies utilisées : "
            description="L'application est développée en React JS couplé avec Firebase et l'usage d'une API"
            key="defi"
          />
        </Awards>
        <ImageDisplay>
          <iframe
            width="100%"
            height="700"
            src="https://www.youtube.com/embed/cd4ZnUT04T0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </ImageDisplay>
      </Details>
    </>
  )
}

const Details = styled(motion.div)`
  color: white;
`
const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`
const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
  @media (max-width: 1500px) {
    display: block;
    margin: 2rem 2rem;
  }
`
const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #9198e5;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 1rem 0rem;
  }
`

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
  }
`
//Award component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  )
}
export default CineSwipe
