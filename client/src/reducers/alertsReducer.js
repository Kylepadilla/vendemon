import {
    FETCH_ALERTS_BEGIN,
    FETCH_ALERTS_SUCCESS,
    FETCH_ALERTS_FAILURE,
  } from '../actions/types';
  
  const initialState = {
    alerts: [],
    loading: false,
    error: null
  };

  export default function alertsReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_ALERTS_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_ALERTS_SUCCESS:
        // All done: set loading "false".
        // Also, replace the alerts with the ones from the server
        return {
          ...state,
          loading: false,
          alerts: action.payload.alerts
        };
  
      case FETCH_ALERTS_FAILURE:
        // The request failed. It's done. So set loading to "false".
        // Save the error, so we can display it somewhere.
        // Since it failed, we don't have alerts to display anymore, so set `alerts` empty.
        //
        // This is all up to you and your app though:
        // maybe you want to keep the alerts around!
        // Do whatever seems right for your use case.
        return {
          ...state,
          loading: false,
          error: action.payload.error,
          alerts: []
        };

      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
}