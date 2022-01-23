import React, { useState, createContext, useEffect } from 'react';

import { auth } from '../utils/firebase/firebase';
import { onAuthStateChanged, signOut, sendSignInLinkToEmail } from 'firebase/auth';

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: `${process.env.REACT_APP_HOST}/signin/redirect`,
  // This must be true.
  handleCodeInApp: true,
};

type AuthActionType = {
  signin: (email: string) => void;
  signout: () => void;
};

export const AuthStateContext = createContext<User>(null!);
export const AuthActionContext = createContext<AuthActionType>(null!);

type AuthProviderProps = { children: React.ReactNode };
export function AuthProvider({ children }: AuthProviderProps) {
  const [init, setInit] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log(firebaseUser);
      if (firebaseUser) {
        const user = {
          id: firebaseUser.uid,
          displayName: firebaseUser.displayName,
        };
        setUser(user);
      } else {
        setUser(null);
      }
      setInit(true);
    });
    return unsubscribe;
  }, []);

  const signin = (email: string) => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // ...
    });
  };

  const signout = () => {
    signOut(auth);
  };

  const action = { signin, signout };


  if (!init) {
    return <div>로딩 중...</div>
  }

  return (
    <AuthActionContext.Provider value={action}>
      <AuthStateContext.Provider value={user}>{children}</AuthStateContext.Provider>
    </AuthActionContext.Provider>
  );
}
