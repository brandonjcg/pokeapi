export interface Pokemon {
  name: string;
  url: string;
}

export interface PokemonCardProps {
  name?: string;
  url?: string;
  onAddToCombat: (e: React.MouseEvent) => void;
  onRemoveFromCombat: (e: React.MouseEvent) => void;
  existsInCombat?: boolean;
  thereAreSixPokemons?: boolean;
  classRequerid?: string;
}
