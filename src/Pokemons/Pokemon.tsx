import {
  Card,
  PokemonName,
  Types,
  TypesSVG,
  FavouriesSVG,
  PokemonDetails,
} from "./pokemonStyle";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import Icon from "./Icon";
import { useGetPokemonDetailsQuery } from "../store/pokemon/pokemonApi";
import { useAppDispatch, useAppSelector } from "../store";
import { toggleLikedPokemon } from "../store/pokemon/likedPokemonsSlice";

export default function Pokemon({ name }: { name: string }) {
  const likedPokemonList = useAppSelector((state) => state.likedPokemons);
  const dispatch = useAppDispatch();

  const { data: pokemon } = useGetPokemonDetailsQuery(name);

  return (
    <Card>
      <img src={pokemon?.sprites?.front_default} alt="pokemon"></img>
      <TypesSVG>
        {pokemon?.types?.map((item, index) => (
          <Icon key={index} iconName={item?.type?.name} />
        ))}
      </TypesSVG>
      <PokemonName>{name}</PokemonName>
      <Types>{pokemon?.types.map((item) => item?.type?.name + " ")}</Types>

      <FavouriesSVG
        onClick={() => {
          dispatch(toggleLikedPokemon(name));
        }}
      >
        {likedPokemonList?.includes(name ?? "") ? (
          <MdOutlineFavorite />
        ) : (
          <MdOutlineFavoriteBorder />
        )}
      </FavouriesSVG>
      <PokemonDetails to={`/pokemon/${name}`}>More info</PokemonDetails>
    </Card>
  );
}
