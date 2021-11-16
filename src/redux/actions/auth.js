import axios from 'axios';
import {getToken} from '../../utils/Constants';

import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT,
} from './types';

//LOAD USER
export const loadUser = () => async dispatch => {
  try {
    console.log('first', getToken);
    const token = await getToken;
    const res = await axios.get(
      'https://foodorderapp11.herokuapp.com/api/auth',
      {
        headers: {
          'x-auth-token': token,
        },
      },
    );

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    // dispatch({
    //   type: AUTH_ERROR,
    // });
  }
};

//Register User
export const register =
  ({name, email, password}) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({name, email, password});
    try {
      const res = await axios.post(
        'https://foodorderapp11.herokuapp.com/api/users',
        body,
        config,
      );

      dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      console.error(err);
      dispatch({
        type: REGISTER_FAIL,
      });
    }
  };
//export logout
export const logout = () => dispatch => {
  dispatch({
    type: LOG_OUT,
  });
};

//Login User
export const login =
  ({email, password, setLoad}) =>
  async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({email, password, setLoad});
    try {
      setLoad(false);
      const res = await axios.post(
        'https://foodorderapp11.herokuapp.com/api/auth',
        body,
        config,
      );
      setLoad(true);
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    } catch (err) {
      setLoad(true);
      console.error(err);
      // dispatch({
      //   type: LOGIN_FAIL,
      // });
    }
  };
