import { PokemonCardProps } from './interfaces';

export const PokemonCardButton = ({
  existsInCombat,
  onAddToCombat,
  onRemoveFromCombat,
  thereAreSixPokemons,
  classRequerid,
}: PokemonCardProps) =>
  existsInCombat ? (
    <button
      onClick={onRemoveFromCombat}
      className={`${classRequerid} px-2 py-1 rounded bg-red-500 text-white`}
    >
      🗑️
    </button>
  ) : (
    <button
      onClick={onAddToCombat}
      disabled={thereAreSixPokemons}
      className={`${classRequerid} px-2 py-1 rounded bg-blue-500 text-white ${thereAreSixPokemons ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      ➕
    </button>
  );
