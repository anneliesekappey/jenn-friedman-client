import React from 'react'
import {
  AboutLink,
  BlogLink,
  BookLink,
  ConnectLink,
  HomeIconStyle,
  Nav,
} from './Shared'
import HomeIcon from '../images/HomeIcon.png'

export const NavBar = () => {
  return (
    <div>
      <Nav>
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
            Blog
          </a>
        </BlogLink>
        <HomeIconStyle>
          <a href="/">
            <img src={HomeIcon} alt="Home" height="80px" />
          </a>
        </HomeIconStyle>
      </Nav>
    </div>
  )
}
