import styled from 'styled-components'
import { Link } from 'react-router-dom'
//Images
import cineswipe from '../img/1.JPG'

import { motion } from 'framer-motion'

import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from '../animation'

import { useScroll } from '../components/useScroll'
import ScrollTop from '../components/ScrollTop'

const OurWork = () => {
  const [element, controls] = useScroll()
  const [element2, controls2] = useScroll()
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      variants={pageAnimation}
      style={{ background: '#fff' }}
    >
      <ScrollTop />

      <Movie>
        <motion.h2 variants={fade}>
          CineSwipe - Une application mobile en React
        </motion.h2>
        <motion.div className="line" variants={lineAnim}></motion.div>
        <Link to="/work/cineswipe">
          <Hide>
            <motion.img variants={photoAnim} src={cineswipe} alt="cineswipe" />
          </Hide>
        </Link>
      </Movie>
    </Work>
  )
}

const Hide = styled.div`
  overflow: hidden;
`

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;
  @media (max-width: 1300px) {
    padding: 2rem 2rem;
  }
  h2 {
    padding: 1rem 0rem;
  }
`
const Movie = styled(motion.div)`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #9198e5;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

//frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #fffebf;
  z-index: 2;
`

const Frame2 = styled(Frame1)`
  background: #ff8efb;
`

const Frame3 = styled(Frame1)`
  background: #8ed2ff;
`

const Frame4 = styled(Frame1)`
  background: #8effa0;
`

export default OurWork
