import { removeHyphen, sentenceCase } from '../../utils';
import { PokemonApi } from './interfaces';

export const PokemonPageDetail = ({ pokemon }: { pokemon: PokemonApi }) => {
  return (
    <>
      <div className="text-center text-xl">
        <p>{`#${pokemon.id}`}</p>
      </div>
      <div className="text-center text-xl">
        <p>{`Height: ${pokemon.height}`}</p>
      </div>
      <div className="text-center text-xl">
        <p>{`Types: ${pokemon.types.map((type) => type.type.name).join(', ')}`}</p>
      </div>
      <div className="text-center text-xl">
        <p>Stats:</p>
        {pokemon.stats.map((stat) => (
          <p key={stat.stat.name}>
            {`${sentenceCase(removeHyphen(stat.stat.name))}: ${stat.base_stat}`}
          </p>
        ))}
      </div>
    </>
  );
};
