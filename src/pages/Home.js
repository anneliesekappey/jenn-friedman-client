import { Container } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer.js'
import { JennAll } from '../components/JennAll.js'

export const Home = () => {
  return (
    <div>
      <Container fixed>
        <JennAll />
        <h2
          style={{ color: '#4f323b', textAlign: 'center', marginTop: '20px' }}
        >
          Jenn Friedman: A New York City Author and Eating Disorder Advocate
        </h2>
        <Footer />
      </Container>
    </div>
  )
}
