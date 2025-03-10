import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { APIS } from '../../api';
import { Pokemon, PokemonCard } from '../PokemonCard';
import { CombatList } from '../CombatList';
import { DashboardInput } from './DashboardInput';
import {
  addPokemon,
  findPokemon,
  removePokemon,
  selectPokemons,
  setPokemonList,
} from '../../store';

export const Dashboard = () => {
  const dispatch = useDispatch();
  const pokemonList = useSelector(selectPokemons);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(
        `${APIS.API_URL_POKEAPI}?limit=151&offset=0`,
      );
      const data = await response.json();
      const formattedPokemon = data.results.map(
        (pokemon: Pokemon, index: number) => ({
          name: pokemon.name,
          url: `${APIS.API_URL_POKE_IMG}${index + 1}.png`,
        }),
      );
      dispatch(setPokemonList(formattedPokemon));
    };

    fetchPokemon();
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col md:w-3/4">
          <DashboardInput onSearch={(value) => dispatch(findPokemon(value))} />
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pokemonList.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                name={pokemon.name}
                url={pokemon.url}
                onAddToCombat={() => dispatch(addPokemon(pokemon.name))}
                onRemoveFromCombat={() => dispatch(removePokemon(pokemon.name))}
              />
            ))}
          </div>
        </div>
        <CombatList />
      </div>
    </div>
  );
};
