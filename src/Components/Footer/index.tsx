import Link from 'next/link'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer_wrapper}>
      <h1>
        <Link className="text-white font-bold" href="/">
          Brasil Metal
        </Link>
      </h1>
    </footer>
  )
}

export default Footer
