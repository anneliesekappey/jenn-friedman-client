import React from 'react'
import Footer from '../components/Footer.js'
import { Container } from '@mui/material'

export const Blog = () => {
  return (
    <div>
      <Container fixed>
        <h2
          style={{
            color: '#909090',
            fontFamily: 'Nunito',
            textAlign: 'center',
            alignItems: 'center',
            marginTop: '186px',
            marginBottom: '350px',
          }}
        >
          Coming soon!
        </h2>
        <Footer />
      </Container>
    </div>
  )
}
