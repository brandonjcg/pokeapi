import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  RootState,
  selectExistsInCombat,
  selectThereAreSixPokemons,
} from '../../store';
import { PokemonCardProps } from './interfaces';
import { PokemonCardButton } from './PokemonCardButton';
import { sentenceCase } from '../../utils/index';

export const PokemonCard = ({
  name,
  url,
  onAddToCombat,
  onRemoveFromCombat,
}: PokemonCardProps) => {
  const navigate = useNavigate();
  const existsInCombat = useSelector((state: RootState) =>
    selectExistsInCombat(state, String(name)),
  );
  const thereAreSixPokemons = useSelector(selectThereAreSixPokemons);

  const handleCardClick = useCallback(
    () => navigate(`/pokemon/${name}`),
    [navigate, name],
  );
  const handleAddToCombat = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onAddToCombat(e);
    },
    [onAddToCombat],
  );
  const handleRemoveFromCombat = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onRemoveFromCombat(e);
    },
    [onRemoveFromCombat],
  );

  return (
    <div
      className="relative border border-gray-300 rounded p-2 text-center"
      onClick={handleCardClick}
    >
      <PokemonCardButton
        existsInCombat={existsInCombat}
        onAddToCombat={handleAddToCombat}
        onRemoveFromCombat={handleRemoveFromCombat}
        thereAreSixPokemons={thereAreSixPokemons}
        classRequerid="absolute top-2 right-2"
      />
      <img
        src={url}
        alt={name}
        className="w-full h-auto min-h-20 object-cover object-center"
      />
      <div className="mt-2 text-center">
        <span>{sentenceCase(name)}</span>
      </div>
    </div>
  );
};
