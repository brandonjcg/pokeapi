import { combineReducers } from 'redux';
import {
  ADD_POKEMON,
  FIND_POKEMON,
  REMOVE_POKEMON,
  RESET_POKEMON,
  SET_POKEMON_LIST,
} from './constants';
import { Pokemon } from '../components';

interface PokemonState {
  allPokemons: Pokemon[];
  filteredPokemons: Pokemon[];
}

const initialState: PokemonState = {
  allPokemons: [],
  filteredPokemons: [],
};

const pokemons = (
  state: PokemonState = initialState,
  action: {
    type: string;
    payload: Pokemon[] | string;
  },
) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return {
        ...state,
        allPokemons: action.payload,
        filteredPokemons: action.payload,
      };
    case FIND_POKEMON:
      if (action.payload === '')
        return {
          ...state,
          filteredPokemons: state.allPokemons,
        };

      return {
        ...state,
        filteredPokemons: state.allPokemons.filter((pokemon) =>
          pokemon.name
            .toLowerCase()
            .includes(String(action.payload).toLowerCase()),
        ),
      };
    case RESET_POKEMON:
      return initialState;
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
