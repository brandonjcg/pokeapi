import { useSelector } from 'react-redux';
import {
  RootState,
  selectExistsInCombat,
  selectThereAreSixPokemons,
} from '../../store';

interface PokemonCardProps {
  name: string;
  url: string;
  onAddToCombat: () => void;
  onRemoveFromCombat: () => void;
}

export const PokemonCard = ({
  name,
  url,
  onAddToCombat,
  onRemoveFromCombat,
}: PokemonCardProps) => {
  const existsInCombat = useSelector((state: RootState) =>
    selectExistsInCombat(state, name),
  );
  const thereAreSixPokemons = useSelector(selectThereAreSixPokemons);
  return (
    <div className="border border-gray-300 rounded p-2 text-center">
      <img src={url} alt={name} className="w-full h-24 object-cover" />
      <div className="mt-2 flex justify-between items-center">
        <span>{name}</span>
        {existsInCombat ? (
          <button
            onClick={onRemoveFromCombat}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            🗑️
          </button>
        ) : (
          <button
            onClick={onAddToCombat}
            disabled={thereAreSixPokemons}
            className="bg-blue-500 text-white rounded-full p-1"
          >
            ➕
          </button>
        )}
      </div>
    </div>
  );
};
