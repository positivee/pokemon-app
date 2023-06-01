import React, { useEffect, useState, useMemo } from "react";
import {
  Panel,
  SearchInput,
  RightSide,
  LoadingInfo,
  PagerButton,
} from "../appStyle";
import { Link } from "react-router-dom";
import Pokemons from "../Pokemons/Pokemons";
import { Pokemon, ResultsEntity } from "../intefaces/pokemonInterfaces";

export default function Home() {
  const baseFetchURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
  const [findPokemon, setFindPokemon] = useState<string>("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [pager, setPager] = useState({
    next: null,
    previous: null,
    currentPager: 0,
  });

  useEffect(() => {
    fetchAllPokemons(baseFetchURL);
  }, []);

  const fetchAllPokemons = (url: string | null) => {
    if (url == null) return;

    fetch(`${url.split("&")[0]}&limit=20`)
      .then((response) => response.json())
      .then((data) => {
        setPager({
          next: data.next,
          previous: data.previous,
          currentPager: getCurrentPage(url),
        });
        const pokemonTypesRequest = data.results.map(
          async (pokemon: ResultsEntity) => {
            return fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
              .then((response) => response.json())
              .then((data) => data);
          }
        );
        return Promise.all(pokemonTypesRequest);
      })
      .then((responses: Pokemon[]) => {
        setPokemons(responses);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const getCurrentPage = (url: string): number => {
    const pageOffsetParam: string | null = new URLSearchParams(
      url.split("?")[1]
    ).get("offset");

    return pageOffsetParam !== null ? parseInt(pageOffsetParam) / 20 + 1 : 0;
  };

  // const filteredPokemons: Pokemon[] = useMemo(() => {
  //   return pokemons.filter((pokemon) => {
  //     const searchedTermCombinations = [
  //       `${pokemon.name} ${pokemon.types[0].type.name}${
  //         pokemon.types[1] ? pokemon.types[1].type.name : ""
  //       }`,
  //       `${pokemon.name}${
  //         pokemon.types[1] ? " " + pokemon.types[1].type.name : ""
  //       } ${pokemon.types[0].type.name}`,
  //     ];
  //     return searchedTermCombinations.some((combination) =>
  //       combination.toLowerCase().includes(findPokemon.toLowerCase())
  //     );
  //   });
  // }, [findPokemon, pokemons]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindPokemon(e.target.value);
  };

  return (
    <div>
      <Panel>
        <SearchInput
          name="search"
          type="text"
          value={findPokemon}
          onChange={handleChange}
          placeholder="Search for a Pokemon by name or type"
          disabled
        />
        <RightSide>
          <div>Number of pokemons: {pokemons.length}</div>
          <Link to="/liked-pokemons">Your liked pokemons </Link>
        </RightSide>
      </Panel>
      <Panel>
        <PagerButton
          onClick={() => {
            fetchAllPokemons(pager.previous);
          }}
        >
          Prev
        </PagerButton>
        <div>Current page: {pager.currentPager}</div>
        <PagerButton
          onClick={() => {
            fetchAllPokemons(pager.next);
          }}
        >
          Next
        </PagerButton>
      </Panel>
      {isLoading && <LoadingInfo>Loading pokemon list...</LoadingInfo>}
      {findPokemon.length > 0 ? (
        <>{/* <Pokemons pokemons={filteredPokemons} /> */}</>
      ) : (
        <Pokemons pokemons={pokemons} />
      )}
      =
    </div>
  );
}
