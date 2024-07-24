import { combineReducers } from 'redux';
import {
  ADD_POKEMON,
  REMOVE_POKEMON,
  RESET_POKEMON,
  SET_POKEMON_LIST,
} from './constants';
import { Pokemon } from '../components';

const pokemons = (
  state: Pokemon[] = [],
  action: {
    type: string;
    payload: Pokemon[];
  },
) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return action.payload;
    case RESET_POKEMON:
      return [];
    default:
      return state;
  }
};

const combatList = (
  state: string[] = [],
  action: {
    type: string;
    name: string;
  },
) => {
  switch (action.type) {
    case ADD_POKEMON:
      return [...state, action.name];
    case REMOVE_POKEMON:
      return state.filter((pokemonName) => pokemonName !== action.name);
    case RESET_POKEMON:
      return [];
    default:
      return state;
  }
};

export const store = combineReducers({
  pokemons,
  combatList,
});

export type RootState = ReturnType<typeof store>;
