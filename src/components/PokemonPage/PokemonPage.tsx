import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { CombatList } from '../CombatList';
import { APIS } from '../../api';
import { PokemonApi } from './interfaces';
import { sentenceCase } from '../../utils';
import { PokemonPageDetail } from './PokemonPageDetail';
import {
  RootState,
  addPokemon,
  removePokemon,
  selectExistsInCombat,
  selectThereAreSixPokemons,
} from '../../store';
import { PokemonCardButton } from '../PokemonCard/PokemonCardButton';

export const PokemonPage = () => {
  const { name = '' } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pokemon, setPokemon] = useState<PokemonApi>();
  const existsInCombat = useSelector((state: RootState) =>
    selectExistsInCombat(state, name),
  );
  const thereAreSixPokemons = useSelector((state: RootState) =>
    selectThereAreSixPokemons(state),
  );

  const handleBack = () => navigate('/');

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await fetch(`${APIS.API_URL_POKEAPI}/${name}`);
      const data = (await response.json()) as PokemonApi;

      setPokemon(data);
    };

    fetchPokemon();
  }, [name]);

  const nameTitle = sentenceCase(name);

  const handleAddToCombat = () => dispatch(addPokemon(name));

  const handleRemoveFromCombat = () => dispatch(removePokemon(name));

  return (
    <div className="flex h-screen place-content-center">
      <div className="container mx-auto p-4">
        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="flex flex-col md:w-3/4">
            <div className="flex justify-between items-center mb-4">
              <button className="self-start" onClick={handleBack}>
                {'<- Volver'}
              </button>
              <PokemonCardButton
                existsInCombat={existsInCombat}
                onAddToCombat={handleAddToCombat}
                onRemoveFromCombat={handleRemoveFromCombat}
                thereAreSixPokemons={thereAreSixPokemons}
              />
            </div>
            {pokemon && (
              <>
                <h1 className="text-4xl text-center">{`${nameTitle} #${pokemon.id}`}</h1>
                <div className="w-full h-64 flex items-center justify-center">
                  <img
                    src={pokemon?.sprites.front_default}
                    alt={name}
                    className="w-64 h-64 object-cover"
                  />
                </div>
                <PokemonPageDetail pokemon={pokemon} />
              </>
            )}
          </div>
          <CombatList />
        </div>
      </div>
    </div>
  );
};
