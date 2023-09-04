import Link from 'next/link'
import { RiCloseCircleFill } from 'react-icons/ri'
import sideMenuContent from '../../../content/side-menu.json'
import { Props } from './interface'
import styles from './sidemenu.module.css'

const SideMenu = ({ onClick }: Props) => {
  return (
    <>
      <div className={styles.side__menu}>
        <div className={styles.icon}>
          <RiCloseCircleFill
            size={30}
            style={{ cursor: 'pointer', color: '#ffc300' }}
            onClick={onClick}
          />
        </div>
        <nav>
          <ul className={styles.unordered__list}>
            {sideMenuContent.content.map((item) => {
              return (
                <li className={styles.list} key={item.title}>
                  <Link
                    className={styles.link}
                    href={item.href}
                    onClick={onClick}
                  >
                    {item.title}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.fade} />
    </>
  )
}

export default SideMenu
