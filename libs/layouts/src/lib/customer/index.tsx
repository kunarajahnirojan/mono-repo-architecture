import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './footer';
import { Header } from './header';
import styled from 'styled-components';

const OutLetContainer = styled.div`
  height: 90vh;
`;

export function CustomerLayout() {
  return (
    <div>
      <main>
        <Header />
        <OutLetContainer>
          <Outlet />
        </OutLetContainer>

        <Footer />
      </main>
    </div>
  );
}
