import * as types from '../Actions/types';
export default function (state = {}, action){
  if(action.type === types.ERROR){
    switch(action.payload){
      default:
        return state;
    }
  } else {
    return state;
  }
}
