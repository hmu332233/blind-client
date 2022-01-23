import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AuthActionContext } from '../../contexts/AuthContext';

type Props = {};

function SignIn(props: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { signin } = useContext(AuthActionContext);
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const { email } = Object.fromEntries(formData);
    signin(email as string);

    console.log(location)
    const from = (location.state as any)?.from;
    navigate('/signin/complete', { replace: true, state: { from: from || '/' } });
    // e.currentTarget.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-sm font-bold text-gray-700">Email</label>
        <input type="email" id="email" name="email" className="mt-1 block w-full shadow-md border-gray-300 rounded-md leading-6 px-2 py-3" />
        <button type="submit" className="bg-gray-900 text-white px-4 py-2 w-full fixed bottom-0 left-0">Sign In</button>
      </form>
    </div>
  );
}

export default SignIn;