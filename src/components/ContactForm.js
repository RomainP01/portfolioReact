import React, { useState } from 'react'

import '../Contactform.css'

const ContactForm = () => {
  const [status, setStatus] = useState('Envoyer')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Envoi...')
    const { name, email, message } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    })
    setStatus('Envoyer')
    let result = await response.json()
    alert(result.status)
  }
  return (
    <div className="wrapper">
      <form className="form" onSubmit={handleSubmit}>
        <div className="pageTitle title">Romain PANI</div>
        <div className="secondaryTitle title">
          06 10 16 06 75
        </div>
        <input
          type="text"
          className="name formEntry"
          placeholder="Name"
          id="name"
          required
        />
        <input
          type="text"
          className="email formEntry"
          placeholder="Email"
          id="email"
          required
        />
        <textarea
          className="message formEntry"
          placeholder="Message"
          id="message"
          required
        ></textarea>
        <button className="submit formEntry">{status}</button>
      </form>
    </div>
  )
}

export default ContactForm
