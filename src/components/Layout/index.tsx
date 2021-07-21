import React from 'react';

import Header from '../Header';

type LayoutProps = {
  children: React.ReactNode,
};

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header title="JBNU BLIND" />
      <main className="flex-grow">
        <section className="text-gray-700 body-font container flex flex-col px-5 pt-12 pb-24 mx-auto max-w-screen-sm">
          {children}
        </section>
      </main>
    </div>
  );
}

Layout.defaultProps = {
};

export default Layout;
