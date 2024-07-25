import ReactDOM from 'react-dom/client';
import { App } from './App.tsx';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { store as PokeApiStore } from './store';
import './index.css';

const store = configureStore({
  reducer: PokeApiStore,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <App />
  </Provider>,
);

// TODO: mejora de front al momento de ya no poder agregar al combatList
// TODO: add dark mode
// TODO: filtrador por pokemon (router)
// TODO: add loading spinner
// TODO: verificar responsive
