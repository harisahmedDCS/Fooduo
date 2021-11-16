import {TICK} from './types';

export const tick = value => dispatch => {
  dispatch({
    type: TICK,
    payload: value,
  });
};
