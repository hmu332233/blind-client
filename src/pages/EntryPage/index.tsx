import React, { FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

type EntryPageProps = {};

function EntryPage(props: EntryPageProps) {
  const history = useHistory();
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { name } = Object.fromEntries(formData);

    e.currentTarget.reset();

    history.push('/');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name" className="block text-sm font-bold text-gray-700">Name</label>
        <input type="text" id="name" name="name" className="mt-1 block w-full shadow-md border-gray-300 rounded-md leading-6 px-2 py-3" />
        <button className="bg-gray-900 text-white px-4 py-2 w-full fixed bottom-0 left-0">Sign In</button>
      </form>
    </div>
  );
}

EntryPage.defaultProps = {
};

export default EntryPage;