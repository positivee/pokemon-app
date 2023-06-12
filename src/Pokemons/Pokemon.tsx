import {
  Card,
  PokemonName,
  Types,
  TypesSVG,
  FavouriesSVG,
  PokemonDetails,
} from "./pokemonStyle";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { CgPlayListRemove } from "react-icons/cg";
import Icon from "./Icon";
import { useGetPokemonDetailsQuery } from "../store/pokemon/pokemonApi";
import { useAppDispatch, useAppSelector } from "../store";
import { toggleLikedPokemon } from "../store/pokemon/likedPokemonsSlice";

export default function Pokemon({
  name,
  variant,
}: {
  name: string;
  variant: string;
}) {
  const likedPokemonList = useAppSelector((state) => state.likedPokemons);
  const dispatch = useAppDispatch();

  const { data: pokemon } = useGetPokemonDetailsQuery(name);

  return (
    <Card variant={variant as "vertical" | "horizontal"}>
      <img src={pokemon?.sprites?.front_default} alt="pokemon"></img>
      {variant === "vertical" && (
        <TypesSVG>
          {pokemon?.types?.map((item, index) => (
            <Icon key={index} iconName={item?.type?.name} />
          ))}
        </TypesSVG>
      )}
      <PokemonName>{name}</PokemonName>
      {variant === "vertical" && (
        <>
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
        </>
      )}

      <PokemonDetails to={`/pokemon/${name}`}>More info</PokemonDetails>

      {variant === "horizontal" && (
        <FavouriesSVG>
          <CgPlayListRemove
            onClick={() => dispatch(toggleLikedPokemon(name))}
          />
        </FavouriesSVG>
      )}
    </Card>
  );
}
