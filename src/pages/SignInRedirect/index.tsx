import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { auth } from '../../utils/firebase/firebase';
import { isSignInWithEmailLink, signInWithEmailLink, updateProfile, getAdditionalUserInfo, AdditionalUserInfo } from 'firebase/auth';

const STEP_TEXT = {
  PENDING: <>로그인 중..</>,
  COMPLETE: <>로그인이 완료되었습니다!<br />이 페이지는 닫고 기존 페이지로 돌아가주세요.</>
} as const;

type Step = keyof typeof STEP_TEXT;

function SignInRedirect() {
  const navigate = useNavigate();
  const [step, setStep] = useState<Step>('PENDING');
  useEffect(() => {
    // 이메일 링크를 사용한 로그인 링크인지 확인
    if (isSignInWithEmailLink(auth, window.location.href)) {
      // Additional state parameters can also be passed via URL.
      // This can be used to continue the user's intended action before triggering
      // the sign-in operation.
      // Get the email if available. This should be available if the user completes
      // the flow on the same device where they started it.
      let email = window.localStorage.getItem('emailForSignIn');
      const isAnotherBrower = !Boolean(email);
      if (!email) {
        // User opened the link on a different device. To prevent session fixation
        // attacks, ask the user to provide the associated email again. For example:
        email = window.prompt('인증을 위해 이메일을 한번 더 입력해주세요!');
      }
      // The client SDK will parse the code from the link for you.
      signInWithEmailLink(auth, email as string, window.location.href)
        .then(async (result) => {
          // Clear email from storage.
          window.localStorage.removeItem('emailForSignIn');
          // You can access the new user via result.user
          // Additional user info profile not available via:
          // result.additionalUserInfo.profile == null
          // You can check if the user is new or existing:
          // result.additionalUserInfo.isNewUser
          setStep('COMPLETE');

          const additionalUserInfo = getAdditionalUserInfo(result) as AdditionalUserInfo;
          if (additionalUserInfo.isNewUser) {
            const name = window.prompt('첫 로그인이시군요!\n닉네임을 입력해주세요.');
            await updateProfile(result.user, { displayName: name });
          }


          if (isAnotherBrower) {
            navigate('/', { replace: true });
          }
        })
        .catch((error) => {
          // Some error occurred, you can inspect the code: error.code
          // Common errors could be invalid email and invalid or expired OTPs.
          console.error({ ...error });
        });
    }
  }, [navigate]);

  return (
    <div className="text-center">
      {STEP_TEXT[step]}
    </div>
  );
}

export default SignInRedirect;
