import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/es/integration/react';

export default function Root() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
}
