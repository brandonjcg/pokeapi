import { Routes, Route } from 'react-router-dom';
import { Dashboard, PokemonPage } from './components';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/pokemon/:name" element={<PokemonPage />} />
    </Routes>
  );
};
