import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { encryptTransform } from 'redux-persist-transform-encrypt';
import { exampleReducer } from '../modules/example/redux';
import _ from 'lodash';
import storageSession from 'redux-persist/lib/storage/session';

const rootReducer = combineReducers({
  ...exampleReducer,
});

// eslint-disable-next-line no-undef
const secretKey = process.env.REACT_APP_REDUX_KEY || 'test';
const keyName = `${process.env.REACT_APP_NAME}-key`;

const persistConfig = {
  key: keyName,
  storage: storageSession,
  version: 1,
  whitelist: [],
  transforms: [
    encryptTransform({
      secretKey,
      onError: function (error) {
        console.error(error);
      },
    }),
  ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  // eslint-disable-next-line no-undef
  devTools: process.env.REACT_APP_ENVIRONMENT !== 'prod',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, PAUSE, REHYDRATE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
