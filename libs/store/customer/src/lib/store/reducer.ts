import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer, PURGE } from 'redux-persist';

import persistConfig from '../persist';
import authReducer from '../features/auth/authSlice';
import alertReducer from '../features/alerts/alertSlice';

const appReducer = combineReducers({
  auth: persistReducer(persistConfig, authReducer),
  alert: alertReducer,
});

const rootReducer = (state: any, action: any) => {
  if (action.type === PURGE) {
    return appReducer(undefined, action);
  }

  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
