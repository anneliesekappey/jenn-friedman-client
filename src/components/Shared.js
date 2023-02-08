import styled from 'styled-components'

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
  text-decoration: none;
  justify-content: center;
  border-radius: 5px;
  background-color: #e9e2d0;
  box-shadow: 3px 3px 2px #4f323b;
  padding: 8px;
  margin: 6px 5px;
`

export const JennTextbox = styled.p`
  padding: 5px;
  border-radius: 6px;
  margin: 6px;
  width: 400px;
  height: 260px;
  color: white;
  font-family: 'Verdana';
  line-height: 1.7;
  position: absolute;
  right: 0;
  outline: none;
  border: 1px solid gray;
  background-color: #6e5773;
  font-size: 19px;
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
