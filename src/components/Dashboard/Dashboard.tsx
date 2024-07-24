import { useState } from 'react';
import { PokemonCard } from '../PokemonCard';
import { CombatList } from '../CombatList';

export const Dashboard = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<string[]>([]);

  const pokemonList = Array.from({ length: 151 }, (_, index) => ({
    id: index + 1,
    name: `Pokemon ${index + 1}`,
    img: 'url-to-image',
  }));

  const handleAddToCombat = (pokemon: string) => {
    setSelectedPokemon([...selectedPokemon, pokemon]);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row md:space-x-4">
        <div className="flex flex-col md:w-3/4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="¿Qué Pokemon buscas?"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {pokemonList.map((pokemon) => (
              <PokemonCard
                key={pokemon.id}
                name={pokemon.name}
                img={pokemon.img}
                onAddToCombat={() => handleAddToCombat(pokemon.name)}
              />
            ))}
          </div>
        </div>
        <CombatList selectedPokemon={selectedPokemon} />
      </div>
    </div>
  );
};
