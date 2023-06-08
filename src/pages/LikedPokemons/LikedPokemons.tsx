import { CgPlayListRemove } from "react-icons/cg";
import { ListItem, List } from "./likedPokemonsStyle";
import { useAppSelector, useAppDispatch } from "../../store";
import { toggleLikedPokemon } from "../../store/pokemon/likedPokemonsSlice";

export default function LikedPokemons() {
  const dispatch = useAppDispatch();
  const liked: string[] = useAppSelector((state) => state.likedPokemons);

  return (
    <List>
      <h1>Your bloved pokemon collection:</h1>
      {liked?.length === 0 ? (
        <h2>No pokemons liked</h2>
      ) : (
        liked?.map((likedPokemon) => (
          <ListItem key={likedPokemon}>
            {likedPokemon}
            <CgPlayListRemove
              onClick={() => dispatch(toggleLikedPokemon(likedPokemon))}
            />
          </ListItem>
        ))
      )}
    </List>
  );
}
