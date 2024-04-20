import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Lazy, NotFound } from '@mono-repo-architecture/components/base';
import { CustomerLayout } from '@mono-repo-architecture/layouts';
import { HOME, ABOUT } from '@mono-repo-architecture/constants';
import { Home, About } from '@mono-repo-architecture/customer/feature';

export const CustomerRouter = () => {
  return (
    <Routes>
      <Route path={HOME} element={<CustomerLayout />}>
        <Route index element={<Lazy page={Home} />} />

        <Route path={HOME} element={<Lazy page={About} />} />
        <Route path={ABOUT} element={<Lazy page={About} />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
