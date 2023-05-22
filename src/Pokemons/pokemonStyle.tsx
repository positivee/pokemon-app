import styled from "styled-components"
import {Link} from "react-router-dom";

export const Cards = styled.div`
  
  max-width: 1200px;
  margin: 3rem auto 0 auto;
  display: grid;
  gap: 1rem;

  @media (min-width: 35rem) {
   grid-template-columns: repeat(2, 1fr); 
  }

  @media (min-width: 60rem) {
   grid-template-columns: repeat(3, 1fr); 
  }
 
`  


export const Card = styled.div`
    display: grid;
    place-items: center;   
  
    border-radius: 15px;
    padding: 3rem 5rem;
    background: var(--secondary-color);
    color: var(--pri-font);

  
`;

export const TypesSVG= styled.div`
  font-size: 1.5rem;
  display: flex;
  gap: 0.2rem;
  margin-bottom:0.2rem;
  
`

export const PokemonName = styled.h2`
    text-transform: capitalize;
    font-size: 1.5rem;
`
export const Types = styled.div`
color: var(--sec-font);
  font-size: 1.3rem;
    
`
export const PokemonDetails = styled(Link)`
  background: var(--backgroud-color);
  color: var(--secondary-color);
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  border-radius: 15px;
  cursor: pointer;

`
export const FavouriesSVG = styled.div`
  margin-top: 1rem;
  font-size: 2rem;
  cursor: pointer;


`



