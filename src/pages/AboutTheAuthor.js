import React from 'react'
import Footer from '../components/Footer.js'
import { AuthorAll } from '../components/AuthorAll.js'
import { Container } from '@mui/material'

export const AboutTheAuthor = () => {
  return (
    <div>
      <Container fixed>
        <AuthorAll />
        <Footer />
      </Container>
    </div>
  )
}
