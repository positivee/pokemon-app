import React, {useContext} from 'react'
import LikedListContext from '../../LikedListContext'
import {CgPlayListRemove} from "react-icons/cg"
import { ListItem, List } from './likedPokemonsStyle';

export default function LikedPokemons() {

  const { likedList, updateLikedList }  = useContext(LikedListContext) || {};


  return (
  <List>
    <h1>Your bloved pokemon collection:</h1>
    {likedList?.length == 0  ?
    <h2>No pokemons liked</h2>
    :
    likedList?.map((likedPokemon :any ,index: number) =>
    <ListItem key={index}>{likedPokemon}
    <CgPlayListRemove onClick={()=>updateLikedList(likedPokemon)}/>
    </ListItem> 

    )
    
    }
  </List>
  )
}
