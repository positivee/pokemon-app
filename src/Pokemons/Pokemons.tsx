import React from 'react'
import Pokemon from './Pokemon'
import { Cards } from './pokemonStyle'


type PokemonsProps = {
  pokemons: { name: string, url: string, types: any[], img: string }[]
    
}

export default function Pokemons({pokemons} : PokemonsProps) {
  return  (
    <Cards>
      {
      pokemons.map((pokemon ,index) => (
          <Pokemon key={index} pokemon={pokemon}  />
        ))
      }
    </Cards>
  )
}

