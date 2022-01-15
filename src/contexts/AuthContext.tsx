import React, { useState, createContext, useEffect } from 'react';

import { app, auth } from '../utils/firebase';
import { getAuth, onAuthStateChanged, signOut, sendSignInLinkToEmail } from 'firebase/auth';

const actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be in the authorized domains list in the Firebase Console.
  url: 'http://localhost:3000/signin/redirect',
  // This must be true.
  handleCodeInApp: true,
};

type AuthActionType = {
  signin: (email: string) => void;
  signout: () => void;
};

export const AuthStateContext = createContext<any>(null!); // TODO: user type 추가하기
export const AuthActionContext = createContext<AuthActionType>(null!);

type AuthProviderProps = { children: React.ReactNode };
export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      console.log(firebaseUser);
      if (firebaseUser) {
        const user = {
          uid: firebaseUser.uid,
          displayName: firebaseUser.displayName,
        };
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return unsubscribe;
  }, []);

  const signin = (email: string = 'hmu332233@gmail.com') => {
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
    .then(() => {
      // The link was successfully sent. Inform the user.
      // Save the email locally so you don't need to ask the user for it again
      // if they open the link on the same device.
      window.localStorage.setItem('emailForSignIn', email);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ...
    });
  };

  const signout = () => {
    signOut(auth);
  };

  const action = { signin, signout };

  return (
    <AuthActionContext.Provider value={action}>
      <AuthStateContext.Provider value={user}>{children}</AuthStateContext.Provider>
    </AuthActionContext.Provider>
  );
}
