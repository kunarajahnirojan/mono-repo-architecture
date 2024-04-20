import React from 'react';
import { Outlet } from 'react-router-dom';

export function CustomerLayout() {
  return (
    <div className="min-h-full flex flex-col">
      <main className="flex  flex-row">
        <div className="bg-white flex w-full flex-col justify-between">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
