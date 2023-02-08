import React from 'react'
import { AboutLink, BookLink, ConnectLink, HomeIconStyle, Nav } from './Shared'
import HomeIcon from '../images/HomeIcon.png'

export const NavBar = () => {
  return (
    <div>
      <Nav>
        <AboutLink>
          <a href="/about" style={{ textDecoration: 'none' }}>
            About Jenn
          </a>
        </AboutLink>
        <ConnectLink>
          <a href="/connect" style={{ textDecoration: 'none' }}>
            Connect
          </a>
        </ConnectLink>
        <BookLink>
          <a href="/book" style={{ textDecoration: 'none' }}>
            The Book
          </a>
        </BookLink>
        <HomeIconStyle>
          <a href="/">
            <img src={HomeIcon} alt="Home" height="80px" />
          </a>
        </HomeIconStyle>
      </Nav>
    </div>
  )
}
