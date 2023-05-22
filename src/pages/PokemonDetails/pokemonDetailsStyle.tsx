import { Link } from "react-router-dom"
import styled from "styled-components"


export const PokemonView = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    border-radius: 15px;
    background: var(--secondary-color);
    padding: 3rem;
    ul{
        margin-left: 2rem;
    }
    svg{
        font-size: 3rem;
        cursor: pointer;
    }
    
    p,li,h3{
        margin-bottom: 0.4rem;
    }
`
export const Gallery = styled.div`
  display: flex;
  justify-content: center;
  
`

export const TwoColums = styled.div`
    display: flex;
    justify-content: center;
    gap: 10rem;
`

export const BaseData = styled.div`
   
    text-transform: capitalize;

   

`

export const MoreData = styled.div`

`
export const BackButton = styled(Link)`
   display: flex;
   justify-content: center;
  background: var(--backgroud-color);
  color: var(--secondary-color);
  margin-top: 2rem;
  padding: 0.5rem 2rem;
  border-radius: 15px;
  
`