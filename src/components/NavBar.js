import React from 'react'
import { HomeIconStyle, Nav } from './Shared'
import HomeIcon from '../images/HomeIcon.png'

export const NavBar = () => {
  return (
    <div>
      <Nav>
        <HomeIconStyle>
          <img src={HomeIcon} alt="Home" height="90px" />
        </HomeIconStyle>
      </Nav>
    </div>
  )
}
