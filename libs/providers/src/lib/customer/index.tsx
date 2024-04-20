import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { CustomerRouter } from '@mono-repo-architecture/router';
import {
  ErrorBoundary,
  Loading,
} from '@mono-repo-architecture/components/base';
import { store, persistor } from '@mono-repo-architecture/store/customer';
export function CustomerProvider() {
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={<Loading />} persistor={persistor}>
          <BrowserRouter>
            <CustomerRouter />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </ErrorBoundary>
  );
}
