import Link from 'next/link'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import { SubTitle, Title } from './styled'

const CaroulselComponent = () => {
  return (
    <Carousel>
      <Carousel.Item interval={3000}>
        <Link href={`/heavy-metal/judas-priest`} legacyBehavior>
          <Image
            src="/images/bands/heavy-metal/heavy-metal-background.jpg"
            alt="img"
          />
        </Link>
        <Carousel.Caption>
          <Title>As cinco melhores bandas de heavy metal</Title>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Image
          src="/images/bands/heavy-metal/heavy-metal-background.jpg"
          alt="img"
        />
        <Carousel.Caption>
          <Title>Second slide label</Title>
          <SubTitle>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SubTitle>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <Image
          src="/images/bands/heavy-metal/heavy-metal-background.jpg"
          alt="img"
        />
        <Carousel.Caption>
          <Title>Third slide label</Title>
          <SubTitle>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </SubTitle>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default CaroulselComponent
