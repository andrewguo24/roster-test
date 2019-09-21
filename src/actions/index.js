import { REQUEST_DATA, DATA_RECEIVED } from "../constants";

export const requestData = () => {
  console.log("Action requestData");
  return {
    type: REQUEST_DATA
  };
};

export const receiveData = json => {
  console.log("Action json", json);
  return {
    type: DATA_RECEIVED,
    payload: json
  };
};
