/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AuthRoutes } from '../AuthRoutes';
import { login } from '../../modules/example/redux';

export const StackRouter = () => {
  const [userDataAfterLogin, setUserDataAfterLogin] = useState();

  useEffect(() => {
    const handleCustomEvent = (event) => {
      setUserDataAfterLogin(event?.detail?.userData);
    };

    window.addEventListener('userJustLogin', handleCustomEvent);

    return () => {
      window.removeEventListener('userJustLogin', handleCustomEvent);
    };
  }, []);

  return <AuthRoutes />;
};
