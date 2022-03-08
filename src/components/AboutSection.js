import me from '../img/me.JPG'
import { About, Description, Image, Hide } from '../styles'
//Framer Motion
import { motion } from 'framer-motion'
import { titleAnim, fade, photoAnim } from '../animation'
import Wave from './Wave'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <motion.div>
          <Hide>
            <motion.h2 variants={titleAnim}>Romain PANI,</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              étudiant en <span>informatique</span>
            </motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Curieux et motivé, je suis à la recherche constante de nouveaux
          savoirs et compétences
        </motion.p>
        <motion.button variants={fade}>
          <a
            href="/contact"
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            Me contacter
          </a>
        </motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={me} alt="me" />
      </Image>
      <Wave />
    </About>
  )
}

//Styled components

export default AboutSection
