import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  padding: 40px 30px;
  background-color: #000;
  height: auto;
  min-height: 600px;
  @media(min-width: 768px) {
    padding: 80px 60px;
  }
`

export const Title = styled.h2`
  color: #fff;
  font-family: 'Metal Mania', sans-serif;
  font-size: 2.5rem;
`

export const SpanTitle = styled.span`
  background: 
    linear-gradient(to right, rgba(256, 256, 256, 1), rgba(256, 256, 256, 1)),
    linear-gradient(to right, rgba(255, 0, 0, 1), rgba(255, 0, 0, 1), rgba(255, 0, 0, 1));
  background-size: 100% 0.1em, 0 0.1em;
  background-position: 100% 100%, 0 100%;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: background-size 400ms;

&:hover,
&:focus {
  background-size: 0 0.1em, 100% 0.1em;
  color: #d60000;
}
`

export const ImageRow = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 10px;
  row-gap: 15px;
  justify-items: center;

  @media(min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(min-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const ImageWrapper = styled.figure`
  height: 300px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const FigCaption = styled.figcaption`
  color: #fff;
  text-align: center;
`