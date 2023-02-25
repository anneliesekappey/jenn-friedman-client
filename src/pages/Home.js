import { Container } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer.js'
import { JennAll } from '../components/JennAll.js'
import { BookButton } from '../components/Shared.js'

export const Home = () => {
  return (
    <div>
      <Container fixed>
        <JennAll />
        <BookButton>
          <a href="/aboutthebook" style={{ textDecoration: 'none' }}>
            ABOUT THE BOOK
          </a>
        </BookButton>
        <Footer />
      </Container>
    </div>
  )
}
