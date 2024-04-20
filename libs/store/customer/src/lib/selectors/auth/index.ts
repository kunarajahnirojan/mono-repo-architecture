import { createDraftSafeSelector } from '@reduxjs/toolkit';
import { jwtDecode } from 'jwt-decode';
import moment from 'moment';

import { RootState } from '../../store/reducer';
import { IAccessToken } from '../../features';

const auth = (state: RootState) => {
  return state?.auth?.auth;
};

export const accessToken = createDraftSafeSelector(
  auth,
  (state) => state?.token
);

export const user = createDraftSafeSelector(auth, (state) => {
  return {
    userId: state?.userId || '',
    userType: state?.userType || '',
    email: state?.email || '',
    firstName: state?.firstName || '',
    lastName: state?.lastName || '',
  };
});

export const tokenType = createDraftSafeSelector(auth, (state) => 'Bearer');

export const tokenExpiresIn = createDraftSafeSelector(accessToken, (token) =>
  token ? jwtDecode<IAccessToken>(token).exp : null
);

export const accessTokenWithType = createDraftSafeSelector(
  [tokenType, accessToken],
  (type, token) => (type && token ? `${type} ${token}` : null)
);

export const isTokenValid = createDraftSafeSelector(tokenExpiresIn, (expires) =>
  expires ? moment.unix(expires).isSameOrAfter(moment()) : false
);

export const isAuthorized = createDraftSafeSelector(
  [isTokenValid, user],
  (valid, userObj) => valid && userObj?.userId !== undefined
);
