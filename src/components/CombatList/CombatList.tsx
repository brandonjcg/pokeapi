import { useSelector, useDispatch } from 'react-redux';
import { removePokemon, selectCombatList } from '../../store';
import { sentenceCase } from '../../utils';

export const CombatList = () => {
  const dispatch = useDispatch();
  const selectedPokemon = useSelector(selectCombatList);

  const handleRemovePokemon = (pokemonName: string) =>
    dispatch(removePokemon(pokemonName));

  return (
    <div className="md:w-1/4 p-4 border border-gray-300 rounded text-center">
      <h2 className="text-lg font-bold">¡Listos para el combate!</h2>
      {!selectedPokemon.length ? (
        <p className="text-gray-500">
          Lista vacía, no hay ningún pokemon listo
        </p>
      ) : (
        <ul className="list-none p-0">
          {selectedPokemon.map((pokemonName: string) => (
            <li
              key={pokemonName}
              className="py-1 flex justify-between items-center"
            >
              {sentenceCase(pokemonName)}
              <button onClick={() => handleRemovePokemon(pokemonName)}>
                🗑️
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
