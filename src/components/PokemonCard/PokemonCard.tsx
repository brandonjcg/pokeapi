interface PokemonCardProps {
  name: string;
  img: string;
  onAddToCombat: () => void;
}

export const PokemonCard = ({ name, img, onAddToCombat }: PokemonCardProps) => {
  return (
    <div className="border border-gray-300 rounded p-2 text-center">
      <img src={img} alt={name} className="w-full h-24 object-cover" />
      <div className="mt-2 flex justify-between items-center">
        <span>{name}</span>
        <button
          onClick={onAddToCombat}
          className="bg-blue-500 text-white rounded-full p-1"
        >
          +
        </button>
      </div>
    </div>
  );
};
