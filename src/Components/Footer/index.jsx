import Image from 'next/image'
import { Reservation, Wrapper } from './styles'

const Footer = () => {
  return (
    <Wrapper>
      <Image
        src="/images/metal-brasil-footer.png"
        width={200}
        height={100}
        alt="Metal Brasil"
      />

      <Reservation>© 2023 Metal Brasil. All Rights Reserved.</Reservation>
    </Wrapper>
  )
}

export default Footer
