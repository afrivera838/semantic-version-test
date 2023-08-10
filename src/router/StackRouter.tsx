/* eslint-disable react/prop-types */
import React from 'react';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { AuthRoutes } from './AuthRoutes';
import { login } from '../modules/example/redux';

export const StackRouter = () => {
  const [userDataAfterLogin, setUserDataAfterLogin] = useState();

  const onClear = () => {
    localStorage.clear();
    login({});
  };

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
