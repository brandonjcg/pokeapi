import { Pokemon } from '../components';
import {
  ADD_POKEMON,
  FIND_POKEMON,
  REMOVE_POKEMON,
  SET_POKEMON_LIST,
} from './constants';

export const setPokemonList = (pokemonList: Pokemon[]) => {
  return {
    type: SET_POKEMON_LIST,
    payload: pokemonList,
  };
};

export const findPokemon = (payload: string) => {
  return {
    type: FIND_POKEMON,
    payload,
  };
};

export const addPokemon = (name: string) => {
  return {
    type: ADD_POKEMON,
    name,
  };
};

export const removePokemon = (name: string) => {
  return {
    type: REMOVE_POKEMON,
    name,
  };
};
