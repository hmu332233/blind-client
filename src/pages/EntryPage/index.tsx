import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { NameSetContext } from '../../contexts/NameContext';

type EntryPageProps = {};

function EntryPage(props: EntryPageProps) {
  const history = useHistory();
  const setName = useContext(NameSetContext);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { name } = Object.fromEntries(formData);

    setName(name);
    history.push('/');

    e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full shadow-md border-gray-300 rounded-md leading-6 px-2 py-3" />
        <button type="submit" className="bg-gray-900 text-white px-4 py-2 w-full fixed bottom-0 left-0">Sign In</button>
      </form>
    </div>
  );
}

EntryPage.defaultProps = {
};

export default EntryPage;