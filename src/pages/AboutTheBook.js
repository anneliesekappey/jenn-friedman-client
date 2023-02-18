import React from 'react'
import Footer from '../components/Footer.js'
import { BookAll } from '../components/BookAll.js'

export const AboutTheBook = () => {
  return (
    <div>
      <h2 style={{ color: '#4f323b', textAlign: 'center', marginTop: '20px' }}>
        Veganism and Eating Disorder Recovery
      </h2>
      <BookAll />
      <Footer />
    </div>
  )
}
