import styled from 'styled-components'
import { devices } from './Responsiveness.js'

export const Nav = styled.nav`
  height: 70px;
  width: auto;
  display: flex;
  align-items: center;
  position: relative;
  padding: 10px;
  background-color: #f8f8f8;
  border: 2px 2px solid #f0f0f0;
  border-radius: 3px;
  box-shadow: 0 2px 2px 2px #f0f0f0;
  font-family: 'Nunito';
  list-style-type: none;

  @media ${devices.mobileS} {
    max-width: 374px;
    padding: 12px;
  }

  @media ${devices.mobileM} {
    max-width: 424px;
  }

  @media ${devices.mobileL} {
    max-width: 767px;
  }

  @media ${devices.tablet} {
    max-width: 1324px;
  }

  @media ${devices.laptop} {
    max-width: 1440px;
  }

  @media ${devices.laptopL} {
    max-width: 2560px;
  }

  @media ${devices.desktop} {
    height: 150px;
  }
`
export const NavLink = styled.a`
  text-decoration: none;
  color: #909090;
  padding: 18px;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #f0f0f0;
  }

  @media ${devices.mobileS} {
    max-width: 374px;
    width: 90%;
    padding: 7px;
    font-size: 12px;
  }

  @media ${devices.mobileM} {
    max-width: 424px;
    width: 94%;
    padding: 12px;
    font-size: 13px;
  }

  @media ${devices.mobileL} {
    max-width: 767px;
    width: 95%;
    padding: 14px;
    font-size: 14px;
  }

  @media ${devices.tablet} {
    max-width: 1324px;
    width: 97%;
    font-size: 15px;
  }

  @media ${devices.laptop} {
    max-width: 1440px;
    width: 98%;
    font-size: 17px;
  }

  @media ${devices.laptopL} {
    max-width: 2560px;
    width: 100%;
    font-size: 20px;
  }

  @media ${devices.desktop} {
    width: 100%;
    font-size: 26px;
  }
`
export const PageDiv = styled.div`
  display: flex;
  float: center;
  width: auto;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  border: 1px solid #f8f8f8;
  background-color: #ffffff;
  padding: 6px;
  margin: 32px 0px 18px 0px;

  @media ${devices.mobileS} {
    max-width: 374px;
    flex-direction: column;
  }

  @media ${devices.mobileM} {
    max-width: 424px;
    flex-direction: column;
  }

  @media ${devices.mobileL} {
    max-width: 767px;
    flex-direction: column;
  }

  @media ${devices.tablet} {
    max-width: 1324px;
    flex-direction: row;
  }

  @media ${devices.laptop} {
    max-width: 1440px;
    flex-direction: row;
  }

  @media ${devices.laptopL} {
    max-width: 2560px;
    flex-direction: row;
    margin-top: 100px;
    margin-bottom: 140px;
  }

  @media ${devices.desktop} {
    padding: 10px;
    margin-top: 80px;
    margin-bottom: 230px;
  }
`
export const PageTextbox = styled.p`
  padding: 5px;
  display: flex;
  float: center;
  align-items: center;
  text-align: justify;
  rext-justify: inter-word;
  margin: 20px 4px 6px 4px;
  border-radius: 2px;
  color: #909090;
  font-family: 'Nunito';
  line-height: 1.7;
  position: relative;
  outline: none;
  background-color: #ffffff;

  @media ${devices.mobileS} {
    max-width: 374px;
    font-size: 9px;
  }

  @media ${devices.mobileM} {
    max-width: 424px;
    font-size: 11px;
  }

  @media ${devices.mobileL} {
    max-width: 767px;
    font-size: 12px;
  }

  @media ${devices.tablet} {
    max-width: 1324px;
    font-size: 13px;
  }

  @media ${devices.laptop} {
    max-width: 1440px;
    font-size: 19px;
  }

  @media ${devices.laptopL} {
    max-width: 2560px;
    font-size: 20px;
  }

  @media ${devices.desktop} {
    font-size: 25px;
    height: 720px;
  }
`
export const BookButton = styled.a`
  text-decoration: none;
  justify-content: center;
  color: #707070;
  padding: 14px;
  display: grid;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #f0f0f0;
    border-radius: 1px;
  }

  @media ${devices.mobileS} {
    max-width: 374px;
    width: 94%;
    font-size: 9px;
  }

  @media ${devices.mobileM} {
    max-width: 424px;
    width: 95%;
    font-size: 10px;
  }

  @media ${devices.mobileL} {
    max-width: 767px;
    width: 96%;
    font-size: 11px;
  }

  @media ${devices.tablet} {
    max-width: 1324px;
    width: 97%;
    height: 50px;
    font-size: 12px;
  }

  @media ${devices.laptop} {
    max-width: 1440px;
    width: 97.5%;
    height: 70px;
    margin-top: 38px;
    margin-bottom: 160px;
    font-size: 18px;
  }

  @media ${devices.laptopL} {
    max-width: 2560px;
    width: 98%;
    height: 120px;
    margin-bottom: 200px;
    font-size: 20px;
  }

  @media ${devices.desktop} {
    width: 98%;
    height: 130px;
    margin-bottom: 260px;
    font-size: 26px;
  }
`
export const BookBuyButton = styled.a`
  text-decoration: none;
  justify-content: center;
  color: #909090;
  padding: 14px;
  display: grid;
  align-items: center;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    border: 1px solid #f0f0f0;
    border-radius: 1px;
  }

  @media ${devices.mobileS} {
    max-width: 374px;
    width: 92%;
    margin-top: 22px;
    font-size: 14px;
  }

  @media ${devices.mobileM} {
    max-width: 424px;
    width: 94%;
    height: 40px;
    margin-top: 28px;
    font-size: 18px;
  }

  @media ${devices.mobileL} {
    max-width: 767px;
    width: 95%;
    height: 60px;
    font-size: 21px;
  }

  @media ${devices.tablet} {
    max-width: 1324px;
    width: 96.5%;
    height: 70px;
    margin-top: 36px;
    font-size: 24px;
  }

  @media ${devices.laptop} {
    max-width: 1440px;
    width: 97.7%;
    height: 64px;
    margin-top: 44px;
    font-size: 26px;
  }

  @media ${devices.laptopL} {
    max-width: 2560px;
    width: 98%;
    height: 120px;
    margin-top: 44px;
    margin-bottom: 200px;
    font-size: 30px;
  }

  @media ${devices.desktop} {
    width: 98%;
    height: 140px;
    margin-bottom: 240px;
    font-size: 36px;
  }
`
export const Image = styled.img`
  @media ${devices.mobileS} {
    max-width: 374px;
    width: 170px;
    height: 243px;
  }

  @media ${devices.mobileM} {
    max-width: 424px;
    width: 189px;
    height: 270px;
  }

  @media ${devices.mobileL} {
    max-width: 767px;
    width: 245px;
    height: 351px;
  }

  @media ${devices.tablet} {
    max-width: 1324px;
    padding-top: 50px;
    padding-right: 20px;
    width: 226px;
    height: 324px;
  }

  @media ${devices.laptop} {
    max-width: 1440px;
    padding-top: 60px;
    padding-right: 26px;
    width: 226px;
    height: 324px;
  }

  @media ${devices.laptopL} {
    max-width: 2560px;
    padding-top: 80px;
    padding-right: 38px;
    width: 245px;
    height: 351px;
  }

  @media ${devices.desktop} {
    padding-top: 110px;
    padding-right: 57px;
    width: 320px;
    height: 459px;
  }
`
