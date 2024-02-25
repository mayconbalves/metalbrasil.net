import Link from 'next/link'
import styled from 'styled-components'

export const Nav = styled.nav`
  background-color: #d60000;
  display: flex;
  height: 80px;
  flex-direction: row-reverse;
  justify-content: space-between;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-around;
  }
`

export const Ul = styled.ul`
  display: none;
  @media (min-width: 768px) {
    align-items: center;
    display: flex;
    flex-direction: row;
    height: 100%;
  }
`

export const LogoWrapper = styled.ul`
  display: block;
  margin: 0 auto;
  @media (min-width: 768px) {
    display: flex;
    margin: 0;
  }
`

export const HamburgerWrapper = styled.ul`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 2rem;
  color: #fff;
  @media (min-width: 768px) {
    display: none;
  }
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

export const SideNav = styled.nav`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  text-align: center;
  padding-top: 0px;

  ${({ toggle }) =>
    toggle &&
    `
    height: 100%;
    width: 340px;
    padding-top: 60px;
  `}
`

export const SideNavLinks = styled(Link)`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;

  &:hover {
    color: #f1f1f1;
  }
`

export const SideNavCloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
  color: #fff;
`

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2;
  cursor: pointer;
`
