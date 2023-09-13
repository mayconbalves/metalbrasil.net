import Link from 'next/link'
import styles from './aside.module.css'
import linksContent from './links.json'

const Aside = () => (
  <aside className={styles.aside_container}>
    <h3 className={styles.aside_title}>Últimas postagens</h3>
    <ul>
      {linksContent.content.map((link) => (
        <li key={link.href} className={styles.aside_list}>
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
    </ul>
  </aside>
)

export default Aside
