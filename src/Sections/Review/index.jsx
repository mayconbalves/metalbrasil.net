import Image from 'next/image'
import Link from 'next/link'
import {
  FigCaption,
  ImageRow,
  ImageWrapper,
  SpanTitle,
  Title,
  Wrapper
} from './styled'

const ReviewSection = () => {
  return (
    <Wrapper>
      <Title>
        Veja nossos <SpanTitle>Reviews</SpanTitle>
      </Title>

      <ImageRow>
        <Link href="/reviews/lamb-of-god-ashes-of-the-wake">
          <ImageWrapper>
            <Image
              src="/images/reviews/ashes-of-the-wake.png"
              alt="lamb of god wrath"
              width="300"
              height="300"
            />
            <FigCaption>Lamb of god - ashes of the wake</FigCaption>
          </ImageWrapper>
        </Link>

        <Link href="/reviews/lamb-of-god-ashes-of-the-wake">
          <ImageWrapper>
            <Image
              src="/images/reviews/ashes-of-the-wake.png"
              alt="lamb of god wrath"
              width="300"
              height="300"
            />
            <FigCaption>Lamb of god - ashes of the wake</FigCaption>
          </ImageWrapper>
        </Link>

        <Link href="/reviews/lamb-of-god-ashes-of-the-wake">
          <ImageWrapper>
            <Image
              src="/images/reviews/ashes-of-the-wake.png"
              alt="lamb of god wrath"
              width="300"
              height="300"
            />
            <FigCaption>Lamb of god - ashes of the wake</FigCaption>
          </ImageWrapper>
        </Link>

        <Link href="/reviews/lamb-of-god-ashes-of-the-wake">
          <ImageWrapper>
            <Image
              src="/images/reviews/ashes-of-the-wake.png"
              alt="lamb of god wrath"
              width="300"
              height="300"
            />
            <FigCaption>Lamb of god - ashes of the wake</FigCaption>
          </ImageWrapper>
        </Link>
      </ImageRow>
    </Wrapper>
  )
}

export default ReviewSection
