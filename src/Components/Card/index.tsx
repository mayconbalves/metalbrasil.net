import Link from 'next/link'
import styles from './card.module.css'

const Card = ({ author, avatarImage, bandImage, subtitle, slug, title }) => {
  return (
    <>
      <Link href={`/heavy-metal/${slug}`} legacyBehavior key={slug}>
        <div className={`${styles.card_container} bg-white dark:bg-black`}>
          <a
            href="#"
            style={{ color: 'inherit' }}
            className={styles.hero_image_container}
          >
            <img
              className={styles.hero_image}
              src={bandImage}
              alt="Spinning glass cube"
            />
          </a>
          <main className={styles.main_content}>
            <h2 className={styles.card_title}>{title}</h2>
            <p>{subtitle}</p>
          </main>
          <div className={styles.card_attribute}>
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
        </div>
      </Link>
    </>
  )
}

export default Card
