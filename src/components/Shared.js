import styled from 'styled-components'
import { devices } from './Responsiveness.js'

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;
  background-color: #6e5773;
  border: 2px 2px solid #4f323b;
  border-radius: 6px;
  color: #e9e2d0;
  box-shadow: 0 2px 2px 2px #4f323b;
  font-family: 'Verdana';
  font-size: 20px;
  justify-content: right;
  list-style-type: none;
`
export const HomeIconStyle = styled.li`
  border-radius: 180px;
  border: 2px solid transparent;
  padding: 0.2px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 2px solid #4f323b;
  }
`
export const JennDiv = styled.div`
  display: flex;
  float: center;
  width: 100%;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  border-radius: 5px;
  background-color: #e9e2d0;
  box-shadow: 3px 3px 2px #4f323b;
  padding: 8px;
  margin: 6px 5px;
`

export const JennTextbox = styled.p`
  padding: 20px;
  display: flex;
  float: center;
  align-items: center;
  margin: 34px 6px 5px 3px;
  border-radius: 6px;
  align-text: center;
  width: 100%;
  height: 150px;
  color: white;
  font-family: 'Verdana';
  line-height: 1.7;
  position: relative;
  outline: none;
  border: 1px solid gray;
  background-color: #6e5773;
  font-size: 17px;

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 95%;
    font-size: 11px;
  }

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 90%;
    font-size: 9.5px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 91%;
    font-size: 10px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 95%;
    font-size: 14px;
  }

  @media ${devices.laptop} {
    max-width: 1024px;
    width: 100%;
    font-size: 18px;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 97%;
    font-size: 20px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 97%;
    font-size: 26px;
    height: 420px;
  }
`
export const AboutLink = styled.a`
  text-decoration: none;
  color: #e9e2d0;
  padding: 10px;
  font-size: 14px;
`
export const ConnectLink = styled.a`
  text-decoration: none;
  color: #e9e2d0;
  padding: 10px;
  font-size: 14px;
`
export const BookLink = styled.a`
  text-decoration: none;
  color: #e9e2d0;
  padding: 10px;
  font-size: 14px;
`
export const BlogLink = styled.a`
  text-decoration: none;
  color: #e9e2d0;
  padding: 10px;
  font-size: 14px;
`
export const BookTextbox = styled.p`
  padding: 16px;
  display: flex;
  float: center;
  align-items: center;
  margin: 14px 10px;
  border-radius: 6px;
  align-text: center;
  margin: 6px;
  width: 100%;
  height: 330px;
  color: #4f323b;
  font-family: 'Verdana';
  line-height: 2.4;
  position: relative;
  outline: none;
  border: 1px solid gray;
  background-color: #e8e8e8;
  font-size: 15px;

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 95%;
    font-size: 9.7px;
  }

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 90%;
    font-size: 8.5px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 91%;
    font-size: 9.2px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 95%;
    font-size: 12px;
  }

  @media ${devices.laptop} {
    max-width: 1024px;
    width: 96%;
    font-size: 14px;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 97%;
    font-size: 15px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 97%;
    font-size: 24px;
    height: 420px;
  }
`
export const BookDiv = styled.div`
  display: flex;
  float: center;
  width: 100%;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  border-radius: 5px;
  background-color: #f8f8f8;
  box-shadow: 3px 3px 2px #4f323b;
  padding: 8px;
  margin: 6px 5px;
`
export const AuthorTextbox = styled.p`
  padding: 16px;
  display: flex;
  float: center;
  align-items: center;
  margin: 14px 10px;
  border-radius: 6px;
  align-text: center;
  margin: 6px;
  width: 100%;
  height: 330px;
  color: #4f323b;
  font-family: 'Verdana';
  line-height: 2.4;
  position: relative;
  outline: none;
  border: 1px solid gray;
  background-color: #e9e2d0;
  font-size: 15px;

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 95%;
    font-size: 9.7px;
  }

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 90%;
    font-size: 8.5px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 91%;
    font-size: 9.2px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 95%;
    font-size: 12px;
  }

  @media ${devices.laptop} {
    max-width: 1024px;
    width: 96%;
    font-size: 14px;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 97%;
    font-size: 15px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 97%;
    font-size: 24px;
    height: 420px;
  }
`
export const AuthorDiv = styled.div`
  display: flex;
  float: center;
  width: 100%;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  border-radius: 5px;
  background-color: #ffc9bb;
  box-shadow: 3px 3px 2px #4f323b;
  padding: 8px;
  margin: 6px 5px;
`
