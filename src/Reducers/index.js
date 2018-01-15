import {combineReducers} from 'redux';
import pinsReducer from './pins_reducer';
import errorReducer from './error_reducer';
//import * as types from '../Actions/types';

const rootReducer = combineReducers({
  errors: errorReducer,
  pins: pinsReducer,
});

export default rootReducer;
