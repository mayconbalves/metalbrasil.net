import Link from 'next/link'
import styled from "styled-components"

export const Nav = styled.nav`
  background-color: red;
  display: flex;
  height: 80px;
  justify-content: space-around;
`

export const Ul = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const ImgLink = styled(Link)`
  height: inherit;
`

export const Img = styled.img`
  height: 100%;
`

export const Li = styled.li`
  color: #fff;
  list-style: none;
  margin: 0 10px;
  font-family: 'Oswald', sans-serif;
  font-weight: bolder;
  text-transform: capitalize;
  font-size: larger;

  &:hover {
    color: #000;
    cursor: pointer;
  }
`