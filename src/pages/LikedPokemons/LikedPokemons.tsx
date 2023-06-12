import { List } from "./likedPokemonsStyle";
import { useAppSelector } from "../../store";
import Pokemon from "../../Pokemons/Pokemon";

export default function LikedPokemons() {
  const liked: string[] = useAppSelector((state) => state.likedPokemons);

  return (
    <List>
      <h1>Your bloved pokemon collection:</h1>
      {liked?.length === 0 ? (
        <h2>No pokemons liked</h2>
      ) : (
        liked?.map((likedPokemon) => (
          <Pokemon
            key={likedPokemon}
            name={likedPokemon}
            variant="horizontal"
          />
        ))
      )}
    </List>
  );
}
