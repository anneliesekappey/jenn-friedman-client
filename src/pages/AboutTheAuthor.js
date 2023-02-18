import React from 'react'
import Footer from '../components/Footer.js'
import { AuthorAll } from '../components/AuthorAll.js'

export const AboutTheAuthor = () => {
  return (
    <div>
      <h2 style={{ color: '#4f323b', textAlign: 'center', marginTop: '20px' }}>
        About the Author
      </h2>
      <AuthorAll />
      <Footer />
    </div>
  )
}
