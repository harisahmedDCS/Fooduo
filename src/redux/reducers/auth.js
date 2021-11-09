import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOG_OUT,
} from '../actions/types';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  token: AsyncStorage.getItem('token'),
  isAuthenticated: null,
  loading: false,
  user: null,
};
export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: true,
        user: payload,
      };
    case REGISTER_SUCCESS:
      AsyncStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      AsyncStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: true,
      };
    // case LOGIN_FAIL:
    case REGISTER_FAIL:
    case LOG_OUT:
      AsyncStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticated: true,
        loading: false,
      };
    // case AUTH_ERROR:
    //   AsyncStorage.removeItem('token');
    //   return {
    //     ...state,
    //     token: null,
    //     isAuthenticated: true,
    //     loading: false,
    //   };
    default:
      return state;
  }
}
