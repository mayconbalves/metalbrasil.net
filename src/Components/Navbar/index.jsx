import Link from 'next/link'
import { useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import {
  HamburgerWrapper,
  Img,
  ImgLink,
  Li,
  LogoWrapper,
  Nav,
  Overlay,
  SideNav,
  SideNavCloseButton,
  SideNavLinks,
  Ul
} from './styles'

const Navbar = () => {
  const [toggleSideMenu, setToggleSideMenu] = useState(false)

  const handleOverlayClick = () => {
    setToggleSideMenu(!toggleSideMenu)
  }

  const [windowSize, setWindowSize] = useState(0)

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth)
    }

    window.addEventListener('resize', handleWindowResize)

    if (windowSize > 768) {
      setToggleSideMenu(false)
    }

    return () => {
      window.removeEventListener('resize', handleWindowResize)
    }
  }, [windowSize])

  return (
    <>
      <Nav>
        <LogoWrapper>
          <ImgLink href="/" style={{ height: 'inherit' }}>
            <Img src="https://www.metalbrasil.net/images/logo.png" alt="logo" />
          </ImgLink>
        </LogoWrapper>
        <Ul>
          <Li>
            <Link href="/discografias">Discografias</Link>
          </Li>
          <Li>
            <Link href="/reviews">Reviews</Link>
          </Li>
        </Ul>
        <HamburgerWrapper onClick={handleOverlayClick}>
          <GiHamburgerMenu />
        </HamburgerWrapper>
      </Nav>

      {toggleSideMenu && (
        <>
          <SideNav toggle={toggleSideMenu}>
            <SideNavCloseButton
              onClick={() => setToggleSideMenu(!toggleSideMenu)}
            >
              X
            </SideNavCloseButton>
            <SideNavLinks href="/">Home</SideNavLinks>
            <SideNavLinks href="/discografias">Discografias</SideNavLinks>
            <SideNavLinks href="/reviews">Reviews</SideNavLinks>
          </SideNav>
          <Overlay />
        </>
      )}
    </>
  )
}

export default Navbar
