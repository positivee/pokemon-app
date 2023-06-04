import { createSlice } from "@reduxjs/toolkit";

import { Pokemon } from "../../intefaces/pokemonInterfaces";

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState: [] as Pokemon[],
  reducers: {
    addPokemons: (state, action) => {
      return action.payload;
    },
    setPokemonDetails: (state, action) => {
      const updatedPokemon = action.payload;

      const updatedState = state.map((pokemon) => {
        if (pokemon.name === updatedPokemon.name) {
          return updatedPokemon;
        }
        return pokemon;
      });

      return updatedState;
    },
  },
});

export const { addPokemons, setPokemonDetails } = pokemonSlice.actions;

export default pokemonSlice.reducer;
