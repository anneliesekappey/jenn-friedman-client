import React from 'react'
import {
  AboutLink,
  BlogLink,
  BookLink,
  ConnectLink,
  HomeLink,
  Nav,
} from './Shared'

export const NavBar = () => {
  return (
    <div>
      <Nav>
        <HomeLink>
          <a href="/" style={{ textDecoration: 'none' }}>
            Home
          </a>
        </HomeLink>
        <BookLink>
          <a href="/aboutthebook" style={{ textDecoration: 'none' }}>
            About The Book
          </a>
        </BookLink>
        <AboutLink>
          <a href="/abouttheauthor" style={{ textDecoration: 'none' }}>
            About The Author
          </a>
        </AboutLink>
        <ConnectLink>
          <a href="/contact" style={{ textDecoration: 'none' }}>
            Contact
          </a>
        </ConnectLink>
        <BlogLink>
          <a href="/blog" style={{ textDecoration: 'none' }}>
            News
          </a>
        </BlogLink>
      </Nav>
    </div>
  )
}
