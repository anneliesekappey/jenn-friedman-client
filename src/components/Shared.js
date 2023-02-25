import styled from 'styled-components'
import { devices } from './Responsiveness.js'

export const Nav = styled.nav`
  height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  padding: 5px;
  background-color: #f8f8f8;
  border: 2px 2px solid #f0f0f0;
  border-radius: 3px;
  box-shadow: 0 2px 2px 2px #f0f0f0;
  font-family: 'Nunito';
  justify-content: right;
  list-style-type: none;
`
export const HomeLink = styled.a`
  text-decoration: none;
  color: #909090;
  padding: 18px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #f0f0f0;
  }
`
export const JennDiv = styled.div`
  display: flex;
  float: center;
  width: 100%;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  background-color: #ffffff;
  padding: 4px 0px 4px 0px;
  margin: 24px 0px 1px 0px;
`

export const JennTextbox = styled.p`
  padding: 10px;
  display: flex;
  float: center;
  align-items: center;
  margin: 14px 6px 2px 3px;
  border-radius: 2px;
  align-text: center;
  width: 100%;
  height: 140px;
  color: #909090;
  font-family: 'Nunito';
  line-height: 1.6;
  position: relative;
  outline: none;
  border: 1px solid #f8f8f8;
  background-color: #ffffff;
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
    max-width: 1324px;
    width: 96%;
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
  color: #909090;
  padding: 18px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #f0f0f0;
  }
`
export const ConnectLink = styled.a`
  text-decoration: none;
  color: #909090;
  padding: 18px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #f0f0f0;
  }
`
export const BookLink = styled.a`
  text-decoration: none;
  color: #909090;
  padding: 18px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #f0f0f0;
  }
`
export const BlogLink = styled.a`
  text-decoration: none;
  color: #909090;
  padding: 18px;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.9s;
  &:hover {
    border: 1px solid #f0f0f0;
  }
`
export const BookDiv = styled.div`
  display: flex;
  float: center;
  width: 100%;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  background-color: #ffffff;
  padding: 4px 0px 4px 0px;
  margin: 24px 0px 1px 0px;
`
export const BookTextbox = styled.p`
  padding: 8px;
  display: flex;
  flex-direction: column;
  float: center;
  align-items: center;
  margin: 2px 4px 2px 3px;
  border-radius: 2px;
  align-text: center;
  width: 100%;
  height: 286px;
  color: #909090;
  font-family: 'Nunito';
  line-height: 1.6;
  position: relative;
  outline: none;
  border: 1px solid #f8f8f8;
  background-color: #ffffff;

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
    max-width: 1324px;
    width: 96%;
    font-size: 16px;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 97%;
    font-size: 18px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 97%;
    font-size: 24px;
    height: 420px;
  }
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
    max-width: 1324px;
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
export const BookButton = styled.a`
  text-decoration: none;
  justify-content: center;
  color: #707070;
  padding: 14px;
  width: 14.8%;
  display: grid;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #f0f0f0;
    border-radius: 1px;
  }
`
export const BookBuyButton = styled.a`
  text-decoration: none;
  justify-content: center;
  color: #909090;
  padding: 14px;
  width: 14.7%;
  display: grid;
  align-items: center;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #f0f0f0;
    border-radius: 1px;
  }
`
