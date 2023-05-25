import React from "react";
import Pokemon from "./Pokemon";
import { Cards } from "./pokemonStyle";

type PokemonsProps = {
  pokemons: {
    name: string;
    url: string;
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    img: string;
  }[];
};

export default function Pokemons({ pokemons }: PokemonsProps) {
  return (
    <Cards>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </Cards>
  );
}
