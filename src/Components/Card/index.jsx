import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import styles from './card.module.css'

const SmallCard = ({
  author,
  avatarImage,
  bandImage,
  subtitle,
  slug,
  title
}) => {
  return (
    <>
      <Link href={`/heavy-metal/${slug}`} legacyBehavior key={slug}>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={bandImage} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>{subtitle}</Card.Text>
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
          </Card.Body>
        </Card>
      </Link>
    </>
  )
}

export default SmallCard
