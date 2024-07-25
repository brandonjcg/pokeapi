import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { BrowserRouter } from 'react-router-dom';

import { App } from './App.tsx';
import { store as PokeApiStore } from './store';
import './index.css';

const store = configureStore({
  reducer: PokeApiStore,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
);

// TODO: add loading spinner
// TODO: add dark mode
// TODO: add aliases
