import styled from "styled-components";
import { Link } from "react-router-dom";

export const Logo = styled(Link)`
  display: grid;
  place-items: center;
  margin: 2rem 0;
`;
export const Panel = styled.div`
  max-width: 70rem;
  background-color: var(--secondary-color);
  margin: 4rem 2rem;
  border-radius: 15px;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  gap: 2rem;

  @media screen and (min-width: 50em) {
    display: flex;
    justify-content: space-between;
    flex-direction: row;
  }
  @media screen and (min-width: 70em) {
    margin: 2rem auto;
  }
`;

export const LoadingInfo = styled.h2`
  display: grid;
  place-items: center;
  margin-top: 5rem;
`;

export const SearchInput = styled.input`
  display: block;
  padding: 1rem;

  border: 3px solid var(--backgroud-color);
  border-radius: 15px;

  @media screen and (min-width: 50em) {
    min-width: 400px;
  }
`;
export const RightSide = styled.div`
  font-size: 1.3rem;
`;

export const PagerButton = styled.button`
  background: var(--backgroud-color);
  color: var(--secondary-color);

  padding: 0.5rem 2rem;
  border: none;
  border-radius: 15px;
  cursor: pointer;
`;
