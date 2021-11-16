import {TICK} from '../actions/types';
const initialState = {
  tick: false,
};

export default function (state = initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case TICK:
      return {tick: payload};
    default:
      return state;
  }
}
