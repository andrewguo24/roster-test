import { REQUEST_DATA, DATA_RECEIVED, REQUEST_DATA_FAILED } from "../constants";

export const requestData = () => ({
  type: REQUEST_DATA
});

export const requestDataFailed = () => ({
  type: REQUEST_DATA_FAILED
});

export const receiveData = json => ({
  type: DATA_RECEIVED,
  payload: json
});
