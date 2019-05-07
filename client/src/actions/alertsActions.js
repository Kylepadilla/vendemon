import axios from "axios";

import { REQUEST_STARTED, REQUEST_SUCCEEDED, REQUEST_FAILED, FETCH_ALERTS_BEGIN, FETCH_ALERTS_SUCCESS, FETCH_ALERTS_FAILURE} from "./types"

export function sendAlert(alertData){
  console.log("actions" + JSON.stringify(alertData))
// return (dispatch, getState) =>{
  // dispatch({type : REQUEST_STARTED});
    axios
    .post("/api/alerts/create", {data: alertData})
    .then(
      res=>console.log(res.data) 
      // res =>dispatch({type : REQUEST_SUCCEEDED, payload : res}),
      // err => dispatch({type: REQUEST_FAILED , payload: err})
    );
// }
}
export function fetchAlerts() {
    return dispatch => {
      dispatch(fetchalertsbegin());
      return fetch("/alerts")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
          dispatch(fetchalertssuccess(json.alerts));
          return json.alerts;
        })
        .catch(error => dispatch(fetchalertsfailure(error)));
    };
  }
  
  // Handle HTTP errors since fetch won't.
  function handleErrors(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }


export const fetchalertsbegin = ()  =>({
            type: FETCH_ALERTS_BEGIN
        })

export const fetchalertssuccess = alertData  =>({
            type: FETCH_ALERTS_SUCCESS,
            payload: {alertData}
        })

export const fetchalertsfailure = error  =>({
            type: FETCH_ALERTS_FAILURE,
            payload: { error }
        })



