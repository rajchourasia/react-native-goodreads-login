import createReducer from '../lib/createReducer';
import * as types from '../actions/types';

export const user = createReducer({
  initialiased: false,
}, {
  [types.SET_AUTHENTICATED_USER](state, action) {
    return Object.assign({}, state, action.user);
  },
  [types.SIGN_OUT]() {
    return Object.assign({}, {
      initialiased: true,
    });
  },
});
