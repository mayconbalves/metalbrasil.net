import styles from './maincard.module.css'
import Link from 'next/link'

const MainCard = ({ slug, bandImage, subtitle, avatarImage, author, title }) => {
  return (
    <>
      <Link href={`/heavy-metal/${slug}`} legacyBehavior key={slug}>
        <div className={`${styles.card_container} bg-white dark:bg-black`}>
          <div>
            <img
              className={styles.hero_image}
              src={bandImage}
              alt="Spinning glass cube"
            />
          </div>
          <main className={styles.main_content}>
            <h2 className={styles.card_title}>{title}</h2>
            <p>{subtitle}</p>
            <hr />
            <div className={styles.card_author_atributes}>
              <img
                src={avatarImage}
                alt="avatar"
                className={styles.small_avatar}
              />
              <p>
                Escrito por:{' '}
                <span>
                  <a href="#">{author}</a>
                </span>
              </p>
            </div>
          </main>
        </div>
      </Link>
    </>
  )
}

export default MainCard
