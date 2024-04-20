import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CustomerRouter } from '@mono-repo-architecture/router';
import { ErrorBoundary } from '@mono-repo-architecture/components/base';

export function CustomerProvider() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <CustomerRouter />
      </BrowserRouter>
    </ErrorBoundary>
  );
}
