import { REQUEST_DATA, DATA_RECEIVED, REQUEST_DATA_FAILED } from "../constants";

export const requestData = () => {
  console.log("Action requestData");
  return {
    type: REQUEST_DATA
  };
};

export const requestDataFailed = () => ({
  type: REQUEST_DATA_FAILED
});

export const receiveData = json => {
  console.log("Action json", json);
  return {
    type: DATA_RECEIVED,
    payload: json
  };
};
