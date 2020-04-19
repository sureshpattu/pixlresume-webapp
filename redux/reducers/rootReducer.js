import counterReducer from './counterReducer';
import commonReducer from './commonReducer';
import loginReducer from './loginReducer';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  common: commonReducer,
  counter: counterReducer,
  login: loginReducer,
});

export default rootReducer;
