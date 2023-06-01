export interface Pokemon {
  abilities: {
    ability: {
      name: string;
    };
  }[];
  base_experience: number;
  forms: {
    name: string;
  }[];
  game_indices: {}[];
  height: number;
  held_items: {}[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: {}[];
  name: string;
  order: number;
  past_types: {}[];
  species: {}[];
  sprites: {
    front_default: string;
    back_default: string;
  };
  stats: {
    base_stat: number;
    stat: {
      name: string;
    };
  }[];
  types: {
    slot: number;
    type: {
      name: string;
      url: string;
    };
  }[];
  weight: number;
}
export interface PokemonsProps {
  pokemons: Pokemon[];
}
export interface PokemonProps {
  pokemon: Pokemon;
}
export interface ResultsEntity {
  name: string;
  url: string;
}
