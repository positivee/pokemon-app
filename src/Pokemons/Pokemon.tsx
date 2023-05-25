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

type PokemonProps = {
  pokemon: {
    name: string;
    img: string;
    url: string;
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
  };
};

export default function Pokemon({ pokemon }: PokemonProps) {
  const { likedList, updateLikedList } = useContext(LikedListContext) || {};
  const handleClick = () => {
    updateLikedList?.(pokemon.name);
  };

  return (
    <Card>
      <img src={pokemon.img} alt="pokemon"></img>
      <TypesSVG>
        {pokemon.types.map((item, index) => (
          <Icon key={index} iconName={item.type.name} />
        ))}
      </TypesSVG>
      <PokemonName>{pokemon.name}</PokemonName>
      <Types>{pokemon.types.map((item) => item.type.name + " ")}</Types>

      <FavouriesSVG
        onClick={() => {
          handleClick();
        }}
      >
        {likedList?.includes(pokemon.name) ? (
          <MdOutlineFavorite />
        ) : (
          <MdOutlineFavoriteBorder />
        )}
      </FavouriesSVG>
      <PokemonDetails
        to={`/pokemon/${pokemon.name}`}
        state={{ pokemon: pokemon }}
      >
        More info
      </PokemonDetails>
    </Card>
  );
}
