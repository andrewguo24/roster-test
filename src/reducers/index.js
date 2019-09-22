import { DATA_RECEIVED, REQUEST_DATA } from "../constants";

const initialState = {
  companyInfo: {},
  employees: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DATA_RECEIVED:
      console.log("reducer DATA_RECEIVED");
      return {
        ...state,
        companyInfo: action.payload.companyInfo,
        employees: action.payload.employees
      };
    case REQUEST_DATA:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default reducer;
