import styled from "styled-components"
import { Link } from "react-router-dom"

export const Logo = styled(Link)`
    display: grid;
    place-items: center;
    margin: 2rem 0;
`
export const SearchPanel = styled.div`
    max-width: 1200px;
    background-color: var(--secondary-color);
    margin: 0 auto;
    border-radius: 15px;
    padding: 2rem;
    display: flex;
    justify-content: space-between;


`

export const LoadingInfo = styled.h2`

  display: grid;
  place-items:center;
 margin-top:5rem;
`

export const SearchInput = styled.input`
        display: block;
        padding: 1rem;
        min-width: 400px;
        border: 3px solid var(--backgroud-color);
        border-radius: 15px;

`
export const RightSide = styled.div`
    font-size: 1.3rem;

`