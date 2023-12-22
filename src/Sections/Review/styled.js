import Container from 'react-bootstrap/Container'
import styled from 'styled-components'

export const Wrapper = styled(Container)`
  background-color: #000;
  height: 600px;
  padding: 80px 60px;
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
  color: red;
}
`