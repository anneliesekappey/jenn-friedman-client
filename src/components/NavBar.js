import React from 'react'
import { NavLink, Nav } from './Shared'

export const NavBar = () => {
  return (
    <div>
      <Nav>
        <NavLink>
          <a href="/" style={{ textDecoration: 'none' }}>
            Home
          </a>
        </NavLink>
        <NavLink>
          <a href="/aboutthebook" style={{ textDecoration: 'none' }}>
            About The Book
          </a>
        </NavLink>
        <NavLink>
          <a href="/abouttheauthor" style={{ textDecoration: 'none' }}>
            About The Author
          </a>
        </NavLink>
        <NavLink>
          <a href="/contact" style={{ textDecoration: 'none' }}>
            Contact
          </a>
        </NavLink>
        <NavLink>
          <a href="/blog" style={{ textDecoration: 'none' }}>
            News
          </a>
        </NavLink>
      </Nav>
    </div>
  )
}
