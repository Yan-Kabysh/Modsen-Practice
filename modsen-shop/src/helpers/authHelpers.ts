import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { ExtendedUser } from '@/../types/types';
import { ROUTES } from '@/constants/Path';
import { setCart } from '@/store/reducers/CartReducer/CartReducer';
import {
  userFetching,
  userFetchingError,
  userFetchingSuccess,
} from '@/store/reducers/UserReducer/UserSlice';

import { getUserCart } from './cartControl';

export const useAuthCheck = (auth: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('token');

    onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        console.log('currentUser', currentUser);
        const userId = currentUser.uid;
        dispatch(
          userFetchingSuccess({ id: userId, email: currentUser.email, token })
        );
        try {
          const items = await getUserCart(userId);
          const itemsWithQuantity = items.map((item: { quantity: any }) => ({
            ...item,
            quantity: item.quantity || 1,
          }));
          dispatch(setCart(itemsWithQuantity));
        } catch (error) {
          console.error('Failed to load cart items:', error);
        }
      }
    });
  }, [auth, dispatch, navigate]);
};

export const handleLogin = async (dispatch: any, data: any, navigate: any) => {
  const auth = getAuth();

  dispatch(userFetching());

  try {
    const credential = await signInWithEmailAndPassword(
      auth,
      data.email,
      data.password
    );
    const user = credential.user as ExtendedUser;
    console.log(user);
    dispatch(
      userFetchingSuccess({
        email: user.email!,
        id: user.uid,
        token: user.accessToken,
      })
    );
    localStorage.setItem('token', user.accessToken);
    navigate(ROUTES.HOME);
  } catch (e: any) {
    console.error(e);
    dispatch(userFetchingError(e.message));
  }
};

export const authFormSubmit = (data: any, dispatch: any, navigate: any) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((credential) => {
      const user = credential.user as ExtendedUser;
      console.log(user);
      dispatch(
        userFetchingSuccess({
          email: user.email,
          id: user.uid,
          token: user.accessToken,
        })
      );
      localStorage.setItem('token', user.accessToken);
      navigate(ROUTES.HOME);
    })
    .catch(console.error);
};
