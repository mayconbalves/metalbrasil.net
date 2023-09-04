import { Props } from './interface'
import styles from './post-card.module.css'

const PostCard = ({ alt, href, src, disclaimer }: Props) => (
  <a href={href}>
    <div className={`${styles.hero__card_container} bg-white dark:bg-black`}>
      <div className={styles.hero__card_image}>
        <img alt={alt} src={src} height="auto" width="auto" />
      </div>
      <div className={styles.hero__card_content}>
        <p className={styles.hero__card_title}>{disclaimer}</p>
      </div>
    </div>
  </a>
)

export default PostCard
