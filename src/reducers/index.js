import { combineReducers } from 'redux';
import { firebaseStateReducer } from 'react-redux-firebase';
import user from './user';
import runtime from './runtime';
import intl from './intl';

export default function createRootReducer({ apolloClient }) {
  return combineReducers({
    apollo: apolloClient.reducer(),
    firebase: firebaseStateReducer,
    user,
    runtime,
    intl,
  });
}
