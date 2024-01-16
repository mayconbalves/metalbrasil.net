import styled from "styled-components";

export const GridCards = styled.section`
  display: grid;
  margin: 20px auto;
  width: auto;
  align-content: center;
  justify-items: center;
  grid-template-columns: 1fr;
  row-gap: 20px;

  @media(min-width: 980px) {
    justify-items: end;
    grid-template-columns: 1fr 2fr;
    width: 920px;
  }
`