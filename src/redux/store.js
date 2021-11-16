import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import alert from './reducers/alert';
import auth from './reducers/auth';
import tick from './reducers/ui';
const reducer = combineReducers({
  alert,
  auth,
  tick,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
);

export default store;
