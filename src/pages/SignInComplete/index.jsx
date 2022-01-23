import React, { useContext } from 'react';

import { useLocation, Navigate } from 'react-router-dom';
import { AuthStateContext } from '../../contexts/AuthContext';

function SignInComplete() {
  const user = useContext(AuthStateContext);
  const location = useLocation();

  if (user) {
    const from = location.state?.from || '/';
    return <Navigate to={from} replace />
  }

  return (
    <div className="text-center">
      인증 확인 메일을 보냈습니다.<br />
      이메일을 확인해주세요!
    </div>
  );
}

export default SignInComplete;
