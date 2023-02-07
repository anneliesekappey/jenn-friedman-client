import React from 'react'
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from './FooterStyles'

const Footer = () => {
  return (
    <Box>
      <h4 style={{ color: '#4f323b', textAlign: 'center', marginTop: '2px' }}>
        Jenn Friedman: A New York City author and Eating Disorder Advocate
      </h4>
      <Container>
        <Row>
          <Column>
            <Heading>Topics</Heading>
            <FooterLink href="#">Veganism</FooterLink>
            <FooterLink href="#">Eating Disorders</FooterLink>
            <FooterLink href="#">Animal Rights</FooterLink>
          </Column>
          <Column>
            <Heading>About Me</Heading>
            <FooterLink href="#">Education</FooterLink>
            <FooterLink href="#">History</FooterLink>
            <FooterLink href="#">Music</FooterLink>
          </Column>
          <Column>
            <Heading>Contact</Heading>
            <FooterLink href="#">Author</FooterLink>
            <FooterLink href="#">Publisher</FooterLink>
            <FooterLink href="#">Seeking Help</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-youtube">
                <span style={{ marginLeft: '10px' }}>YouTube</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  )
}

export default Footer
