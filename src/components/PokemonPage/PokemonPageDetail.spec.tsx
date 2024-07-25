import { describe, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import { PokemonPageDetail } from './PokemonPageDetail';
import { PokemonApi } from './interfaces';

describe('Unit test PokemonPageDetail component', () => {
  test('Happy path, validate strings are displayed correctly', () => {
    const pokemon: PokemonApi = {
      base_experience: 64,
      height: 7,
      id: 1,
      is_default: true,
      location_area_encounters: 'kanto-route-2-south-towards-viridian-city',
      name: 'bulbasaur',
      order: 1,
      sprites: {
        back_default: 'string',
        back_female: 'string',
        back_shiny: 'string',
        back_shiny_female: 'string',
        front_default: 'string',
        front_female: 'string',
        front_shiny: 'string',
        front_shiny_female: 'string',
      },
      stats: [
        {
          base_stat: 80,
          effort: 0,
          stat: {
            name: 'hp',
            url: 'https://pokeapi.co/api/v2/stat/1/',
          },
        },
        {
          base_stat: 82,
          effort: 0,
          stat: {
            name: 'attack',
            url: 'https://pokeapi.co/api/v2/stat/2/',
          },
        },
      ],
      weight: 69,
      types: [
        {
          slot: 1,
          type: {
            name: 'grass',
            url: 'https://pokeapi.co/api/v2/type/12/',
          },
        },
        {
          slot: 2,
          type: {
            name: 'poison',
            url: 'https://pokeapi.co/api/v2/type/4/',
          },
        },
      ],
    };

    const { getByText } = render(<PokemonPageDetail pokemon={pokemon} />);
    expect(getByText('#1')).toBeTruthy();
    expect(getByText('Height: 7')).toBeTruthy();
    expect(getByText('Types: grass, poison')).toBeTruthy();
    expect(getByText('Stats:')).toBeTruthy();
    expect(getByText('Hp: 80')).toBeTruthy();
    expect(getByText('Attack: 82')).toBeTruthy();
  });
});
