import Card from 'react-bootstrap/Card'
import styled from 'styled-components'

//  huge: '1440px',
//  large: '1170px',
//  medium: '768px',
//  small: '450px',

export const Container = styled(Card)`
  display: flex;
  flex-direction: row;
  justify-content: center;
`

export const CardImg = styled(Card.Img)`
  width: 100px;
  height: 150px;

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