import { Props } from './interface'
import styles from './playlist.module.css'

const PlayList = ({ playListContent }: Props) => {
  const {
    content: { mainIframe, iframe }
  } = playListContent
  return (
    <section className={`${styles.playlist_container} dark:bg-black bg-white `}>
      <div className={styles.playlist_iframe}>
        <h2>Ouça nossa playlist</h2>
        <iframe
          width={mainIframe.width}
          height={mainIframe.height}
          src={mainIframe.src}
          title={mainIframe.title}
          allow={mainIframe.allow}
          allowFullScreen
        />
      </div>
      <div className={styles.playlist_list}>
        <ul>
          {iframe.map((content) => {
            return (
              <div
                key={content.title}
                className={`${styles.wrapper_list} shadow-lg shadow-black dark:shadow-white`}
              >
                <li>
                  <iframe
                    width={content.width}
                    height={content.height}
                    src={content.src}
                    title={content.title}
                    allow={content.allow}
                    allowFullScreen
                  />
                </li>
                <div className={styles.wrapper_list_title}>
                  <p>{content.videoTitle}</p>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    </section>
  )
}

export default PlayList
