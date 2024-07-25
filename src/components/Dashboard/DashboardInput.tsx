import debounce from 'lodash.debounce';
import { useState, useEffect } from 'react';

interface DashboardInputProps {
  onSearch: (value: string) => void;
}

export const DashboardInput: React.FC<DashboardInputProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const [debounceSearch] = useState(() =>
    debounce((value: string) => onSearch(value), 500),
  );

  useEffect(() => {
    return () => debounceSearch.cancel();
  }, [debounceSearch]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchTerm(value);
    debounceSearch(value);
  };

  const handleClearSearch = () => {
    setSearchTerm('');
    onSearch('');
  };

  return (
    <div className="mb-4 relative">
      <input
        type="text"
        placeholder="¿Qué Pokemon buscas?"
        className="w-full p-2 border border-gray-300 rounded"
        value={searchTerm}
        onChange={handleSearch}
      />
      {searchTerm && (
        <button
          onClick={handleClearSearch}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600"
        >
          X
        </button>
      )}
    </div>
  );
};
