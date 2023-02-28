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
  list-style-type: none;

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 97%;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 98%;
    font-size: 10px;
  }

  @media ${devices.mobileL} {
    max-width: 424px;
    width: 99%;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 99%;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 99%;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 99%;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 99%;
    height: 150px;
  }
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

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 95%;
    padding: 10px;
    font-size: 12px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 97%;
    font-size: 13px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 97%;
    font-size: 14px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 97%;
    font-size: 15px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 97%;
    font-size: 17px;
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
  }
`
export const JennDiv = styled.div`
  display: flex;
  float: center;
  width: 100%;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  background-color: #ffffff;
  padding: 4px 0px 4px 0px;
  margin: 8px 0px 1px 0px;

  @media ${devices.mobileS} {
    max-width: 324px;
    flex-direction: column;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    flex-direction: column;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 95%;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    padding: 5px;
    flex-direction: row;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 97%;
    flex-direction: row;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 97%;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 99%;
    padding: 10px;
    margin-top: 80px;
  }
`
export const JennTextbox = styled.p`
  padding: 10px;
  display: flex;
  float: center;
  align-items: center;
  margin: 14px 6px 2px 3px;
  border-radius: 2px;
  color: #909090;
  font-family: 'Nunito';
  line-height: 1.6;
  position: relative;
  outline: none;
  border: 1px solid #f8f8f8;
  background-color: #ffffff;

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 90%;
    height: 180px;
    font-size: 9px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 93%;
    height: 200px;
    font-size: 11px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 95%;
    font-size: 12px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 95%;
    height: 250px;
    font-size: 13px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 98%;
    height: 295px;
    font-size: 19px;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 97%;
    font-size: 20px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 97%;
    font-size: 27px;
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

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 97%;
    font-size: 12px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 97%;
    font-size: 13px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 97%;
    font-size: 14px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 98%;
    font-size: 15px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 97%;
    font-size: 17px;
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

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 97%;
    font-size: 12px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 97%;
    font-size: 13px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 97%;
    font-size: 14px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 97%;
    font-size: 15px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 97%;
    font-size: 17px;
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

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 97%;
    font-size: 12px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 97%;
    font-size: 13px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 97%;
    font-size: 14px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 97%;
    font-size: 15px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 97%;
    font-size: 17px;
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

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 97%;
    font-size: 12px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 97%;
    font-size: 13px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 97%;
    font-size: 14px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 97%;
    font-size: 15px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 97%;
    font-size: 17px;
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

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 95%;
    flex-direction: column;
    font-size: 9px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 96%;
    flex-direction: column;
    font-size: 10px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    flex-direction: column;
    width: 97%;
    font-size: 11px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 96%;
    flex-direction: row;
    font-size: 11px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 95%;
    font-size: 15px;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 97%;
    font-size: 16px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 98%;
    height: 550px;
    font-size: 18px;
  }
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
  color: #909090;
  font-family: 'Nunito';
  line-height: 1.6;
  position: relative;
  outline: none;
  border: 1px solid #f8f8f8;
  background-color: #ffffff;
`
export const AuthorTextbox = styled.p`
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
`
export const AuthorDiv = styled.div`
  display: flex;
  float: center;
  width: 100%;
  align-items: center;
  flex-direction: row;
  text-decoration: none;
  justify-content: center;
  background-color: #ffffff;
  padding: 4px 0px 4px 0px;
  margin: 6px 0px 1px 0px;

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 96%;
    flex-direction: column;
    font-size: 9px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 95%;
    flex-direction: column;
    font-size: 10.5px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 96%;
    flex-direction: column;
    font-size: 11.5px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 98%;
    flex-direction: row;
    height: 400px;
    font-size: 11.5px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 97%;
    flex-direction: row;
    font-size: 15.6px;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 98%;
    height: 500px;
    flex-direction: row;
    font-size: 17px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 99%;
    flex-direction: row;
    font-size: 18.5px;
    height: 560px;
  }
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

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 90%;
    font-size: 9px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 91%;
    font-size: 10px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 95%;
    font-size: 11px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 96%;
    height: 50px;
    font-size: 12px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 20%;
    height: 50px;
    font-size: 16px;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 98%;
    height: 120px;
    font-size: 20px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 98%;
    height: 160px;
    font-size: 26px;
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

  @media ${devices.mobileS} {
    max-width: 324px;
    width: 90%;
    font-size: 9px;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 91%;
    height: 40px;
    font-size: 10px;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 95%;
    height: 60px;
    font-size: 11px;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    width: 96%;
    height: 70px;
    font-size: 12px;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    width: 15.4%;
    height: 64px;
    font-size: 16px;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    width: 98%;
    height: 120px;
    font-size: 20px;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    width: 98%;
    height: 150px;
    font-size: 26px;
  }
`
export const Image = styled.img`
  @media ${devices.mobileS} {
    max-width: 324px;
    width: 45%;
    height: 45%;
  }

  @media ${devices.mobileM} {
    max-width: 374px;
    width: 48%;
    height: 48%;
  }

  @media ${devices.mobileL} {
    max-width: 425px;
    width: 51%;
    padding-left: 12px;
    height: 51%;
  }

  @media ${devices.tablet} {
    max-width: 768px;
    padding-top: 50px;
    padding-right: 3px;
    width: 54%;
    height: 54%;
  }

  @media ${devices.laptop} {
    max-width: 1324px;
    padding-top: 60px;
    padding-right: 4px;
    width: 67%;
    height: 67%;
  }

  @media ${devices.laptopL} {
    max-width: 1440px;
    padding-top: 80px;
    padding-right: 6px;
    width: 96%;
    height: 96%;
  }

  @media ${devices.desktop} {
    max-width: 2560px;
    padding-top: 110px;
    padding-right: 7px;
    width: 94%;
    height: 94%;
  }
`
