import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import { CardBody, CardImg, CardTitle, Container } from './styled'

const SmallCard = ({
  author,
  avatarImage,
  bandImage,
  subtitle,
  slug,
  title
}) => {
  return (
    <Link href={`/heavy-metal/${slug}`} legacyBehavior key={slug}>
      <Container>
        <CardImg src={bandImage} />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <Card.Text>{subtitle}</Card.Text>
        </CardBody>
      </Container>
    </Link>
  )
}

export default SmallCard
