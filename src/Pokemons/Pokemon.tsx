import { useContext, useEffect, useState } from "react";
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
import { PokemonProps } from "../intefaces/pokemonInterfaces";
import { setPokemonDetails } from "../store/pokemon/pokemonSlice";
import { useDispatch } from "react-redux";

export default function Pokemon({ pokemon }: PokemonProps) {
  const dispatch = useDispatch();
  const { likedList, updateLikedList } = useContext(LikedListContext) || {};
  const handleClick = () => {
    updateLikedList?.(pokemon.name);
  };

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(setPokemonDetails(data));
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Card>
      <img src={pokemon.sprites?.front_default} alt="pokemon"></img>
      <TypesSVG>
        {pokemon?.types?.map((item, index) => (
          <Icon key={index} iconName={item.type.name} />
        ))}
      </TypesSVG>
      <PokemonName>{pokemon.name}</PokemonName>
      <Types>{pokemon?.types?.map((item) => item.type?.name + " ")}</Types>

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
      <PokemonDetails to={`/pokemon/${pokemon.name}`}>More info</PokemonDetails>
    </Card>
  );
}
