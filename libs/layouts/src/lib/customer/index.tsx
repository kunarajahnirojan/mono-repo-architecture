import React from 'react';
import { Outlet } from 'react-router-dom';

import { Footer } from './footer';
import { Header } from './header';
import { SideBar } from './sidebar';

export function CustomerLayout() {
  return (
    <div className="min-h-full flex flex-col">
      <Header />
      <main className="flex  flex-row">
        <div className="h-full md:block hidden">
          <SideBar />
        </div>
        <div className="bg-white flex w-full flex-col justify-between">
          <Outlet />
          <Footer />
        </div>
      </main>
    </div>
  );
}
