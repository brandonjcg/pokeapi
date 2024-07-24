import { useSelector } from 'react-redux';
import { selectCombatList } from '../../store';

export const CombatList = () => {
  const selectedPokemon = useSelector(selectCombatList);
  return (
    <div className="md:w-1/4 p-4 border border-gray-300 rounded text-center">
      <h2 className="text-lg font-bold">¡Listos para el combate!</h2>
      {!selectedPokemon.length ? (
        <p className="text-gray-500">
          Lista vacía, no hay ningún pokemon listo
        </p>
      ) : (
        <ul className="list-none p-0">
          {selectedPokemon.map((pokemonName: string) => {
            return (
              <li key={pokemonName} className="py-1">
                {pokemonName}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
