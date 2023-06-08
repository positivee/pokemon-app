import { useParams } from "react-router-dom";
import {
  PokemonView,
  BaseData,
  LikedButton,
  Gallery,
  TwoColums,
  BackButton,
} from "./pokemonDetailsStyle";
import { MdOutlineFavorite, MdOutlineFavoriteBorder } from "react-icons/md";
import { useGetPokemonDetailsQuery } from "../../store/pokemon/pokemonApi";
import { useAppDispatch, useAppSelector } from "../../store";
import { toggleLikedPokemon } from "../../store/pokemon/likedPokemonsSlice";

function PokemonDetails() {
  const { name = "" } = useParams();
  const likedPokemonList = useAppSelector((state) => state.likedPokemons);
  const dispatch = useAppDispatch();
  const { data: pokemonDetails } = useGetPokemonDetailsQuery(name);

  return (
    <PokemonView>
      <Gallery>
        <img src={pokemonDetails?.sprites?.front_default} alt="pokemon"></img>
        <img src={pokemonDetails?.sprites?.back_default} alt="pokemon"></img>
      </Gallery>
      <TwoColums>
        <BaseData>
          <h3>Pokemon details: </h3>
          <p>Name: {pokemonDetails?.name}</p>
          <p>Base experience: {pokemonDetails?.base_experience}</p>
          <p>Weight: {pokemonDetails?.weight} </p>
          <p>Height: {pokemonDetails?.height} </p>
          <h3>Abilites:</h3>
          <ul>
            {pokemonDetails?.abilities.map((ability, index) => {
              return <li key={index}>{ability.ability.name}</li>;
            })}
          </ul>
          <h3>Types:</h3>
          <ul>
            {pokemonDetails?.types.map((type, index) => {
              return <li key={index}>{type.type.name}</li>;
            })}
          </ul>
        </BaseData>
        <BaseData>
          <h3>Base stats:</h3>
          <ul>
            {pokemonDetails?.stats.map((stat, index) => {
              return (
                <li key={index}>
                  {`${stat.stat.name.toUpperCase()} ${stat.base_stat}`}{" "}
                </li>
              );
            })}
          </ul>

          <LikedButton onClick={() => dispatch(toggleLikedPokemon(name))}>
            {likedPokemonList?.includes(name ?? "") ? (
              <MdOutlineFavorite />
            ) : (
              <MdOutlineFavoriteBorder />
            )}
          </LikedButton>
        </BaseData>
      </TwoColums>
      <BackButton to="/">Back to pokemon list</BackButton>
    </PokemonView>
  );
}

export default PokemonDetails;
