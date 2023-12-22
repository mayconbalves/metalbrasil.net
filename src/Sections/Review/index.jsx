import Image from 'next/image'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { SpanTitle, Title, Wrapper } from './styled'

const ReviewSection = () => {
  return (
    <Wrapper>
      <Title>
        Veja nossos <SpanTitle>Reviews</SpanTitle>
      </Title>

      <Row>
        <Col xs={3}>
          <Image
            src="/images/reviews/lamb-of-god-wrath.png"
            alt="lamb of god wrath"
            width="200"
            height="200"
          />
        </Col>

        <Col xs={3}>
          <Image
            src="/images/reviews/lamb-of-god-wrath.png"
            alt="lamb of god wrath"
            width="200"
            height="200"
          />
        </Col>
      </Row>
    </Wrapper>
  )
}

export default ReviewSection
