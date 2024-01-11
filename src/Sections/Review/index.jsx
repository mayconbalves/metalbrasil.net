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
              src="/images/reviews/ashes-of-the-wake.jpeg"
              alt="lamb of god ashes of the wake"
              width="300"
              height="300"
            />
            <FigCaption>Lamb of God - ashes of the wake</FigCaption>
          </ImageWrapper>
        </Link>

        <Link href="/reviews/black-label-society-doom-crew-inc">
          <ImageWrapper>
            <Image
              src="/images/reviews/doom-crew-inc.jpeg"
              alt="Black Label Society - doom crew inc"
              width="300"
              height="300"
            />
            <FigCaption>Black Label Society - doom crew inc</FigCaption>
          </ImageWrapper>
        </Link>

        <Link href="/reviews/megadeth-rude-awakening">
          <ImageWrapper>
            <Image
              src="/images/reviews/rude-awakening.jpeg"
              alt="Megadeth - rude awakening"
              width="300"
              height="300"
            />
            <FigCaption>Megadeth - rude awakening</FigCaption>
          </ImageWrapper>
        </Link>

        <Link href="/reviews/mercyful-fate-melissa">
          <ImageWrapper>
            <Image
              src="/images/reviews/melissa.jpg"
              alt="Mercyful Fate - melissa"
              width="300"
              height="300"
            />
            <FigCaption>Mercyful Fate - melissa</FigCaption>
          </ImageWrapper>
        </Link>
      </ImageRow>
    </Wrapper>
  )
}

export default ReviewSection
