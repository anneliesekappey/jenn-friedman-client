import React from 'react'
import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
import { Container } from '@mui/material'

export const Contact = () => {
  return (
    <div>
      <Container fixed>
        <ContactForm />
        <Footer />
      </Container>
    </div>
  )
}
