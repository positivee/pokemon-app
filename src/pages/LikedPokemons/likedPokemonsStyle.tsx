import styled from "styled-components"


export const List = styled.div`
    width: 600px;
    border-radius: 15px;
    
    background: var(--secondary-color);
    margin: auto;
    display: grid;
    place-items: center;

    h1,h2{
        padding: 2rem;
    }
`

export const ListItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    font-size: 1.5rem;
    border-top: 1px solid black;

    svg{
        cursor: pointer;
        font-size: 2rem;
    }
    

`