import React from 'react';
import { useEffect, useState } from 'react';
import { AuthRoutes } from '../AuthRoutes';

export const StackRouter = () => {
  const [userDataAfterLogin, setUserDataAfterLogin] = useState();

  useEffect(() => {
    const handleCustomEvent = event => {
      setUserDataAfterLogin(event?.detail?.userData);
    };

    window.addEventListener('userJustLogin', handleCustomEvent);

    return () => {
      window.removeEventListener('userJustLogin', handleCustomEvent);
    };
  }, []);

  return <AuthRoutes />;
};
