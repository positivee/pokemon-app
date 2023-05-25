import React, { useEffect, useState, useMemo } from "react";
import { SearchPanel, SearchInput, RightSide, LoadingInfo } from "../appStyle";
import { Link } from "react-router-dom";
import Pokemons from "../Pokemons/Pokemons";
import { Pokemon, ResultsEntity } from "../intefaces/pokemonInterfaces";

export default function Home() {
  const [findPokemon, setFindPokemon] = useState<string>("");
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllPokemons();
  }, []);

  const fetchAllPokemons = () => {
    fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=10000")
      .then((response) => response.json())
      .then((data) => {
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

  const filteredPokemons: Pokemon[] = useMemo(() => {
    return pokemons.filter((pokemon) => {
      const searchedTermCombinations = [
        `${pokemon.name} ${pokemon.types[0].type.name}${
          pokemon.types[1] ? pokemon.types[1].type.name : ""
        }`,
        `${pokemon.name}${
          pokemon.types[1] ? " " + pokemon.types[1].type.name : ""
        } ${pokemon.types[0].type.name}`,
      ];
      return searchedTermCombinations.some((combination) =>
        combination.toLowerCase().includes(findPokemon.toLowerCase())
      );
    });
  }, [findPokemon, pokemons]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFindPokemon(e.target.value);
  };

  return (
    <div>
      <SearchPanel>
        <SearchInput
          name="search"
          type="text"
          value={findPokemon}
          onChange={handleChange}
          placeholder="Search for a Pokemon by name or type"
        />
        <RightSide>
          <div>Number of pokemons: {pokemons.length}</div>
          <Link to="/liked-pokemons">Your liked pokemons </Link>
        </RightSide>
      </SearchPanel>
      {isLoading && <LoadingInfo>Loading pokemon list...</LoadingInfo>}

      {findPokemon.length > 0 ? (
        <Pokemons pokemons={filteredPokemons} />
      ) : (
        <Pokemons pokemons={pokemons} />
      )}
    </div>
  );
}
