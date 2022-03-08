import { motion } from 'framer-motion'
import { useState } from 'react'

const Toggle = ({ children, title }) => {
  const [toggle, SetToggle] = useState(false)
  return (
    <motion.div layout classname="question" onClick={() => SetToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ''}
      <div className="faq-line"></div>
    </motion.div>
  )
}

export default Toggle
