import React from 'react'
import Footer from '../components/Footer.js'
import { BookAll } from '../components/BookAll.js'
import { BookBuyButton } from '../components/Shared.js'
import { Container } from '@mui/material'

export const AboutTheBook = () => {
  return (
    <div>
      <Container fixed>
        <BookAll />
        <BookBuyButton>
          <a
            href="https://www.routledge.com/Veganism-and-Eating-Disorder-Recovery/Friedman/p/book/9781032316239?fbclid=IwAR1fM8XqoM7Z673vJPCwsSAH7EVq5Ypm-3IHm-_6Ed1JrzwuMoIMtlBzoXg#"
            style={{ textDecoration: 'none' }}
          >
            PURCHASE THE BOOK
          </a>
        </BookBuyButton>
        <Footer />
      </Container>
    </div>
  )
}
