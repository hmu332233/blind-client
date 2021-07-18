import React from 'react';

import {
  Link
} from 'react-router-dom';

type HeaderProps = {
  title: string,
};

function Header({ title }: HeaderProps) {
  return (
    <header className={'text-gray-700 body-font'}>
      <div className="container mx-auto flex flex-wrap p-5 flex-col items-center">
        <Link
          className="flex title-font font-black items-center text-gray-900 mb-4 md:mb-0"
          to="/"
        >
          <span className="ml-3 text-xl">{title}</span>
        </Link>
        {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link className="mr-5 hover:text-gray-900" to="/about">
            About
          </Link>
          <Link className="mr-5 hover:text-gray-900" to="/">
            Posts
          </Link>
        </nav> */}
      </div>
    </header>
  );
}


Header.defaultProps = {
};

export default Header;