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
    <div>
      이메일 링크 로그인 진행 중입니다.<br />
      이메일을 확인해주세요
    </div>
  );
}

export default SignInComplete;
