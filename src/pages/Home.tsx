import React, { useEffect, useState, useMemo } from "react";
import { SearchPanel, SearchInput, RightSide, LoadingInfo } from "../appStyle";
import { Link } from "react-router-dom";
import Pokemons from "../Pokemons/Pokemons";

export default function Home() {
  const [findPokemon, setFindPokemon] = useState<string>("");
  const [pokemons, setPokemons] = useState<PokemonData>([]);
  const [isLoading, setIsLoading] = useState(true);

  type PokemonData = {
    name: string;
    url: string;
    types: {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    }[];
    img: string;
  }[];

  interface ResultsEntity {
    name: string;
    url: string;
  }

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
              .then((data) => ({
                name: pokemon.name,
                url: pokemon.url,
                types: data.types,
                img: data.sprites.front_default,
              }));
          }
        );

        return Promise.all(pokemonTypesRequest);
      })
      .then((responses: PokemonData) => {
        setPokemons(responses);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  const filteredPokemons: PokemonData = useMemo(() => {
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
