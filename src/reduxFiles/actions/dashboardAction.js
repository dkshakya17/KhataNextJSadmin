import * as actionConstants from "../../utils/actionConstants";
import { api } from "../../utils/apiConstants";
import axios from "axios";

export const getRecentTransaction = () => (dispatch, getState) => {
  axios
    .get(api.baseUrl + api.recentTransactions)
    .then((response) => {
      dispatch({
        type: actionConstants.RECENT_TRANSACTION_LIST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};

export const getDistributor = () => (dispatch, getState) => {
  axios
    .get(api.baseUrl + api.distributors)
    .then((response) => {
      dispatch({
        type: actionConstants.DISTRIBUTOR_LIST,
        payload: response.data,
      });
    })
    .catch((error) => {
      console.log("error = ", error);
    });
};
