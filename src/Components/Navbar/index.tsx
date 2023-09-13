import Link from 'next/link'
import { useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import sideMenuContent from '../../../content/side-menu.json'
import SideMenu from '../SideMenu'
import ThemeToggle from '../ThemeToggle'
import styles from './navbar.module.css'

const Navbar = () => {
  const [sideMenu, setSideMenu] = useState(false)

  const renderSideMenu = () => {
    return <SideMenu onClick={toggleSideMenu} />
  }

  const toggleSideMenu = () => {
    setSideMenu(!sideMenu)
  }

  return (
    <>
      {sideMenu && renderSideMenu()}
      <nav id="full-menu" className={styles.navbar}>
        <ul className={styles.navbar__unordered_list}>
          <li className="m-2">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Brasil Metal"
                width={60}
                height={60}
              />
            </Link>
          </li>
        </ul>
        <ul className={styles.navbar__unordered_list}>
          {sideMenuContent.content.map((item) => {
            return (
              <li className="m-2" key={item.title}>
                <Link className={styles.navbar__link} href={item.href}>
                  {item.title}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul className={styles.navbar__unordered_list}>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>

      <nav
        id="icon-menu"
        className="top-0 z-50 flex justify-between w-full h-20 p-1 bg-black"
      >
        <ul className={styles.navbar__unordered_list}>
          <li className="m-2 cursor-pointer">
            <GiHamburgerMenu
              size={25}
              style={{ color: '#ffc300' }}
              onClick={toggleSideMenu}
            />
          </li>
        </ul>

        <ul className={styles.navbar__unordered_list}>
          <li className="m-2">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Brasil Metal"
                width={60}
                height={60}
              />
            </Link>
          </li>
        </ul>

        <ul className={styles.navbar__unordered_list}>
          <li>
            <ThemeToggle />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar
