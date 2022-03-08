import { motion } from 'framer-motion'
import { pageAnimation, titleAnim } from '../animation'
import styled from 'styled-components'

import ContactForm from '../components/ContactForm'

import ScrollTop from '../components/ScrollTop'

const ContactUs = () => {
  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <Title>
        <ScrollTop />
        <Hide>
          <motion.h2 variants={titleAnim}>Contactez moi :</motion.h2>
        </Hide>
      </Title>
      <ContactForm />
    </ContactStyle>
  )
}

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`

const Title = styled(motion.div)`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`

const Hide = styled.div`
  overflow: hidden;
`
const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #9198e5;
`

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`
const Form = styled.form`
  label {
    font-size: 25px;
  }
  input {
    width: 25%;
    border: 1px solid #9198e5;
    font-size: 25px;
    color: black;
    text-align: center;
    padding: 4px;
    margin: 10px;
    background-color: white;
    background-position: bottom right;
    background-repeat: no-repeat;
    resize: none;
  }
  textarea {
    width: 20%;
    border: 1px solid #9198e5;
    font-size: 25px;
    color: #9198e5;
    text-align: center;
    padding: 4px;
    margin: 4px;
    background-color: white;
    background-position: bottom right;
    background-repeat: no-repeat;
    resize: none;
  }

  button {
    padding: 10px;
    border-radius: 5px;
    border: none;
    color: #fff;
    font-size: 25px;
    background-color: #9198e5;
    transition: 200ms;
    margin: 10px;
    font-weight: bolder;
    width: 160px;
    box-shadow: 0px 0px 30px 0px rgba(0, 0, 0, 0.1);
  }

  button:hover {
    transform: scale(1.05);
  }
`
export default ContactUs
