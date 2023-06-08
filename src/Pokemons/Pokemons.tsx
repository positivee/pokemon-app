import Pokemon from "./Pokemon";
import { Cards } from "./pokemonStyle";
import { PokemonsProps } from "../intefaces/pokemonInterfaces";

export default function Pokemons({ pokemons }: PokemonsProps) {
  return (
    <Cards>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} name={pokemon.name} />
      ))}
    </Cards>
  );
}
