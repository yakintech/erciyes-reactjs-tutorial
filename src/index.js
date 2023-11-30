import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { FavoritesProvider } from './context/FavoritesContext';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './store/CartSlice';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

root.render(
  <Provider store={store}>
    <FavoritesProvider>
      <BrowserRouter>
        <App></App>
      </BrowserRouter>
    </FavoritesProvider>
  </Provider>



);

