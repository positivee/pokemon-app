import styled from "styled-components";
import { Link } from "react-router-dom";

export const Cards = styled.div`
  max-width: 70rem;
  /* margin: 3rem auto 0 auto; */

  margin: 4rem 2rem;
  display: grid;
  gap: 1rem;

  @media (min-width: 45rem) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 60rem) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 70rem) {
    margin: 4rem auto;
  }
`;
interface CardProps {
  variant?: "vertical" | "horizontal";
}
export const Card = styled.div<CardProps>`
  ${(props) =>
    props.variant === "vertical" &&
    `
    display: grid;
    place-items: center;
    padding: 3rem 5rem;
    border-radius: 15px;

  `}

  ${(props) =>
    props.variant === "horizontal" &&
    `
    width:100%;
    display: grid;
    place-items: center;
    padding: 2rem 0rem;
    border-top: 1px solid black;
    
    @media (min-width: 45rem) {
      
    
      display: flex;
       gap:1rem;
       justify-content:space-evenly;
    align-items: center; 
    border-bottom:1rem;
   
  }
    `}
  
 

  background: var(--secondary-color);
  color: var(--pri-font);
`;

export const TypesSVG = styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 0.2rem;
  margin-bottom: 0.2rem;
`;

export const PokemonName = styled.h2`
  text-transform: capitalize;
  font-size: 1.5rem;
`;
export const Types = styled.div`
  color: var(--sec-font);
  font-size: 1.3rem;
`;
export const PokemonDetails = styled(Link)`
  background: var(--backgroud-color);
  color: var(--secondary-color);
  padding: 0.5rem 2rem;
  border-radius: 15px;
  cursor: pointer;
`;
export const FavouriesSVG = styled.div`
  display: grid;
  place-items: center;
  margin: 1rem 0;
  font-size: 2rem;
  cursor: pointer;
`;
