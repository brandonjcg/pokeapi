interface CombatListProps {
  selectedPokemon: string[];
}

export const CombatList = ({ selectedPokemon }: CombatListProps) => {
  return (
    <div className="md:w-1/4 p-4 border border-gray-300 rounded">
      <h2 className="text-lg font-bold">LISTOS PARA EL COMBATE</h2>
      {selectedPokemon.length === 0 ? (
        <p className="text-gray-500">
          Lista vacía, no hay ningún pokemon listo
        </p>
      ) : (
        <ul className="list-none p-0">
          {selectedPokemon.map((pokemon, index) => (
            <li key={index} className="py-1">
              {pokemon}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
