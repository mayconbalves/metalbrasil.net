import Image from 'next/image'
import Link from 'next/link'
import cardContent from '../../../content/card.json'
import styles from './recomended-posts.module.css'

const RecomendedPostsSection = () => {
  return (
    <div className="dark:bg-black bg-white">
      <h3 className={styles.recomended_posts_title}>
        Curta mais dos nossos conteúdos
      </h3>
      <div className={styles.recomended_posts_card}>
        {cardContent.content.map((card) => {
          return (
            <Link href={card.href} key={card.alt}>
              <div className={styles.recomended_posts_body}>
                <div>
                  <Image
                    className={styles.recomended_posts_image}
                    src={card.src}
                    alt={card.alt}
                    width={400}
                    height={200}
                  />
                </div>
                <div className={styles.recomended_posts_wrapper_disclaimer}>
                  <p className={styles.recomended_posts_disclaimer}>
                    {card.disclaimer}
                  </p>
                </div>
              </div>
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default RecomendedPostsSection
