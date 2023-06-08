import React, { useState, useMemo } from "react";
import {
  Panel,
  SearchInput,
  RightSide,
  LoadingInfo,
  PagerButton,
} from "../appStyle";
import { Link } from "react-router-dom";
import Pokemons from "../Pokemons/Pokemons";
import { useGetAllPokemonsQuery } from "../store";

export default function Home() {
  const [findPokemon, setFindPokemon] = useState<string>("");

  const [pager, setPager] = useState(0);
  const { data, isLoading } = useGetAllPokemonsQuery(pager * 20) || {};
  const { count = 0, next = null, previous = null } = data || {};

  const getUrlOffset = (url: string): number => {
    const offset = new URLSearchParams(url.split("?")[1]).get("offset");

    return offset !== null ? parseInt(offset) : 20;
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {};

  const handlePage = (page: string | null) => {
    if (page === null) return;
    const nextPage = getUrlOffset(page) / 20;

    setPager(nextPage);
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
          <div>Number of pokemons: {count}</div>
          <Link to="/liked-pokemons">Your liked pokemons </Link>
        </RightSide>
      </Panel>
      <Panel>
        <PagerButton
          onClick={() => {
            handlePage(previous);
          }}
        >
          Prev
        </PagerButton>
        <div>Current page: {pager}</div>
        <PagerButton
          onClick={() => {
            handlePage(next);
          }}
        >
          Next
        </PagerButton>
      </Panel>
      {isLoading && <LoadingInfo>Loading pokemon list...</LoadingInfo>}
      {findPokemon.length > 0 ? (
        <>{/* <Pokemons pokemons={filteredPokemons} /> */}</>
      ) : (
        // <Pokemons pokemons={data?.results} />
        <></>
      )}

      {data?.results && <Pokemons pokemons={data.results} />}
    </div>
  );
}
