import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// storage padrao do redux-persist na web

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'Growdev',
      // nome da key que aparecerá como identificador no navegador
      storage,
      // define que o storage a ser utilizado é o importado
      // storage:storage
    },
    reducers
    // sao os reducers que serão persistidos na aaplicação
  );
  return persistedReducer;
};
