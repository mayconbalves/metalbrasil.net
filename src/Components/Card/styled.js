import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

export const Container = styled(Card)`
  cursor: pointer;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-shadow: 1px 2px 7px 0px;
  
  @media(min-width: 980px) {
    max-width: 450px;
    width: 450px;
  }

  &:hover {
    box-shadow: 1px 2px 7px 0px rgba(214, 0, 0, 1);
  }
`

export const CardImg = styled(Card.Img)`
  width: 100px;
  height: auto;

  @media(min-width: 768px) {
    width: 200px;
    height: 250px;
  }

  @media(min-width: 1170px) {
    width: 200px;
    height: 250px;
  }
`

export const CardTitle = styled(Card.Title)`
`

export const CardBody = styled(Card.Body)`
  padding: 10px;
`