import  { useEffect, useState, useContext } from 'react'
import {  useParams } from 'react-router-dom';
import { PokemonView, BaseData, MoreData, Gallery, TwoColums, BackButton} from './pokemonDetailsStyle';
import {MdOutlineFavorite, MdOutlineFavoriteBorder} from "react-icons/md"
import LikedListContext from '../../LikedListContext';


interface Pokemon {
  abilities: {
    ability:{
      name: string;
    }
  }[];
  base_experience: number;
  forms: {
      name: string
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
    back_default: string
  };
  stats: {
      base_stat: number;
      stat: {
        name: string;
      }
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


function PokemonDetails() {
    const {name } = useParams();
    const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);
    const { likedList, updateLikedList }  = useContext(LikedListContext) || {};
 


   useEffect(()=>{
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((response) => response.json())
      .then((data) => setPokemonDetails(data))
      .catch((err) => console.log(err));
   },[])


   
  return (
    
    <PokemonView>
       <Gallery>
      <img src={pokemonDetails?.sprites?.front_default} ></img>
      <img src={pokemonDetails?.sprites?.back_default} ></img>
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
        { 
        pokemonDetails?.abilities.map((ability,index) => {
          return <li key={index}>{ability.ability.name}</li>
        })
        }
        </ul>
        <h3>Types:</h3>
        <ul>
        { 
        pokemonDetails?.types.map((type, index) => {
          return <li key={index}>{type.type.name}</li>
        })
        }
        </ul>
        </BaseData>
        <MoreData>
          <h3>Base stats:</h3>
          <div>
            { 
          pokemonDetails?.stats.map((stat,index) => {
            return <li key={index}>{`${stat.stat.name.toUpperCase()} ${stat.base_stat}`} </li>
          })
          }

          </div>

          <div onClick={()=>updateLikedList(name)}>
          {( 
            likedList?.includes(name ?? '')) ? 
            <MdOutlineFavorite/>
             : 
            <MdOutlineFavoriteBorder/> 
          }
          </div>

         
         
        </MoreData>
      </TwoColums>
      <BackButton to="/">Back to pokemon list</BackButton>
    </PokemonView>
    
  )
}

export default PokemonDetails


