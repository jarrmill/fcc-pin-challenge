import * as types from '../Actions/types';
export default function (state = { pins: []}, action){
  switch(action.type){
    case types.ADD_PIN:
    case types.DELETE_PIN:
    case types.LIKE_PIN:
    case types.GET_PINS:
      console.log("Adding pins to state: ", action.payload);
      return {...state, pins: action.payload};

    case types.ERROR:
      console.log("ERROR!");
      return state;
    default:
      return state;
  }
}
