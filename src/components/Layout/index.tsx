import React from 'react';
import { Outlet } from "react-router-dom";

import Header from '../Header';

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="JBNU BLIND" />
      <main className="flex-grow">
        <section className="text-gray-700 body-font container flex flex-col px-5 py-12 mx-auto max-w-screen-sm">
          <Outlet />
        </section>
      </main>
    </div>
  );
}

export default Layout;
