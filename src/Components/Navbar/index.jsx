import Link from 'next/link'
import { Img, ImgLink, Li, Nav, Ul } from './styles'

const Navbar = () => {
  return (
    <Nav>
      <Ul>
        <ImgLink href="/" style={{ height: 'inherit' }}>
          <Img src="images/logo.png" alt="logo" />
        </ImgLink>
      </Ul>
      <Ul>
        <Li>
          <Link href="noticias">Notícias</Link>
        </Li>
        <Li>
          <Link href="discografias">Discografias</Link>
        </Li>
        <Li>
          <Link href="playlists">PlayLists</Link>
        </Li>
      </Ul>
    </Nav>
  )
}

export default Navbar
