import { Pokemon } from '../components';
import { RootState } from './reducers';

export const selectCombatList = (state: RootState) => state.combatList;

export const selectPokemons = (state: RootState) =>
  state.pokemons.filteredPokemons as Pokemon[];

export const selectExistsInCombat = (state: RootState, name: string) =>
  state.combatList.includes(name);
export const selectThereAreSixPokemons = (state: RootState) =>
  state.combatList.length === 6;

export const selectCanAddToCombat = (state: RootState, name: string) =>
  selectThereAreSixPokemons(state) && !selectExistsInCombat(state, name);
