import styled from 'styled-components'

export const Box = styled.div`
  padding: 3px 1px;
  background: white;
  height: 140px;
  position: fixed;
  bottom: 10px;
  width: 100%;
  margin: Auto;
  clear: both;

  @media (max-width: 1000px) {
    padding: 10px 4px;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 5px;
  height: 130px;
`
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 180px;
  height: 120px;
`
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 100px;
`
export const FooterLink = styled.a`
  color: gray;
  margin-bottom: 10px;
  font-size: 10px;
  text-decoration: none;

  &:hover {
    color: black;
    transition: 200ms ease-in;
  }
`
export const Heading = styled.p`
  font-size: 12px;
  color: gray;
  margin-bottom: 8px;
  font-weight: bold;
`
