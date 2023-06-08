import { useContext } from "react";
import {
  Card,
  PokemonName,
  Types,
  TypesSVG,
  FavouriesSVG,
  PokemonDetails,
} from "./pokemonStyle";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import LikedListContext from "../LikedListContext";
import Icon from "./Icon";
import { useGetPokemonDetailsQuery } from "../store";

export default function Pokemon({ name }: { name: string }) {
  const { likedList, updateLikedList } = useContext(LikedListContext) || {};

  const { data: pokemon } = useGetPokemonDetailsQuery(name);

  const handleClick = () => {
    updateLikedList?.(name);
  };

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
          handleClick();
        }}
      >
        {likedList?.includes(name) ? (
          <MdOutlineFavorite />
        ) : (
          <MdOutlineFavoriteBorder />
        )}
      </FavouriesSVG>
      <PokemonDetails to={`/pokemon/${name}`}>More info</PokemonDetails>
    </Card>
  );
}
