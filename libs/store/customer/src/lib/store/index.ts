import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';
import { createAxios } from '@mono-repo-architecture/middlewares';

//
import rootReducer from './reducer';
import { rootSaga } from './saga';

const sagaMiddleware = createSagaMiddleware();

//logging redux actions
const loggerMiddleware = createLogger({
  collapsed: true,
  diff: true,
  duration: true,
  timestamp: false,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      thunk: false,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }) as any[];

    return middleware.concat([sagaMiddleware, loggerMiddleware]);
  },
});

sagaMiddleware.run(rootSaga);
export type State = ReturnType<typeof store.getState>;

export const persistor = persistStore(store);
createAxios(store);
