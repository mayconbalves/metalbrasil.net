import Aside from '../../Components/Aside'
import styles from './layout.module.css'

const PostLayout = ({ title, subtitle, description, imageProps }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={`${styles.wrapper_post} mx-4 bg-white dark:bg-black`}>
          <div className="flex flex-col w-full items-center">
            <div className="w-3/4">
              <h1 className="text-4xl my-6 font-bold">{title}</h1>
            </div>
            <div className="w-3/4">
              <h3 className="my-6 text-justify">{subtitle}</h3>
            </div>
          </div>
          <div className="flex w-full">
            <img
              src={imageProps.src}
              alt={imageProps.alt}
              width="100%"
              height="400px"
            />
          </div>
          <div className="flex w-3/4 m-auto items-center">
            <p className={styles.post_description}>{description}</p>
          </div>
        </div>
        <div className="grid__main_aside bg-white dark:bg-black">
          <Aside />
        </div>
      </div>
    </>
  )
}

export default PostLayout
