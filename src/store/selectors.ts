import { RootState } from './reducers';

export const selectCombatList = (state: RootState) => state.combatList;
export const selectPokemons = (state: RootState) => state.pokemons;

export const selectExistsInCombat = (state: RootState, name: string) =>
  state.combatList.includes(name);
export const selectThereAreSixPokemons = (state: RootState) =>
  state.combatList.length === 6;
