import Pokemon from "./Pokemon";
import { Cards } from "./pokemonStyle";

import { useAppSelector } from "../store";

export default function Pokemons() {
  const pokemons = useAppSelector((state) => state.pokemons);

  return (
    <Cards>
      {pokemons.map((pokemon) => (
        <Pokemon key={pokemon.name} pokemon={pokemon} />
      ))}
    </Cards>
  );
}
