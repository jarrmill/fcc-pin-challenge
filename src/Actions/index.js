import axios from 'axios';
import * as types from './types';

const root_url = process.env.REACT_APP_DB_PATH" || http://localhost:8080";
//---------------------
//plain ole javascript functions
//---------------------


//------------------------
//action javascript functions
//------------------------

export function test(){
  return ({type: types.TEST, payload: "Success!"});
}

export function createPin(pinInfo, authHeader){
  const data = {title: pinInfo.title, imgurl: pinInfo.url};
  var pins = axios.post(`${root_url}/createpin`, data, {headers: authHeader})
    .then(response => {
      return({type: types.ADD_PIN, payload: response.data});
    }).catch( error => {
      return({type: types.ERROR, payload: types.AXIOS});
    });
  return(pins);
}
export function deletePin(authHeader, pinId){
  //Note: this function not only deletes a pin, but fetches an updated list of pins
  const data = {pinid: pinId}

  var pins = axios.post(`${root_url}/deletepin`, data, {headers: authHeader})
    .then(response => {
      console.log("Deleting pin");
      return({type:types.DELETE_PIN, payload: response.data});
    }).catch(error => {
      console.log("Error: ", error);
      return({type:types.ERROR, payload: types.AXIOS});
    });

  return pins;
}
export function likePin(authHeader, pin){
  var data = {pin: pin};
  var headers = {headers: authHeader};

  var pins = axios.post(`${root_url}/likepin`, data, headers)
    .then(response => {
      return({type:types.LIKE_PIN, payload: response.data});
    }).catch(error => {
      console.log("Error in likepin axios: ", error);
      return({type:types.ERROR, payload: types.AXIOS});
    })
  return pins;
}
export function sharePin(authHeader, pin){
  var data = {pin};
  var headers = {headers: authHeader};

  var pins = axios.post(`${root_url}/sharepin`, data, headers)
    .then(response => {
      return({type:types.SHARE_PIN, payload: response.data});
    }).catch(error => {
      console.log("Error in sharepin axios: ", error);
      return({type:types.ERROR, payload: types.AXIOS});
    })
  return pins;
}
export function getAllPins(){
  var pins = axios.get(`${root_url}/getallpins`)
    .then(response => {
      console.log("Fetched all pins");
      return({type: types.GET_PINS, payload: response.data});
    }).catch(error => {
      return({type: types.ERROR, payload: types.AXIOS});
    });
  return(pins);
}
