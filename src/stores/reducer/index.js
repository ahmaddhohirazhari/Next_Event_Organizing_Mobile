import {combineReducers} from 'redux';

import counter from './counter';
import auth from './auth';
import user from './user';
import booking from './booking';
import dataOrder from './dataOrder';

export default combineReducers({
  counter,
  auth,
  user,
  booking,
  dataOrder,
});
