import styled from "styled-components";

export const List = styled.div`
  border-radius: 15px;

  background: var(--secondary-color);
  margin: 0 2rem;
  display: grid;
  place-items: center;

  h1,
  h2 {
    padding: 2rem;
  }

  @media screen and (min-width: 50em) {
    max-width: 600px;
    margin: auto;
  }
`;
