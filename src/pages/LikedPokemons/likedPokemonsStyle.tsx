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

export const ListItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  font-size: 1.5rem;
  border-top: 1px solid black;

  svg {
    cursor: pointer;
    font-size: 2rem;
  }
`;
