import * as actionConstants from "../../utils/actionConstants";

const INITIAL_STATE = {
  recentTransactions: [],
  distributors: [],
};

export const DashboardReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionConstants.RECENT_TRANSACTION_LIST:
      return {
        ...state,
        recentTransactions: action.payload,
      };
    case actionConstants.DISTRIBUTOR_LIST:
      return {
        ...state,
        distributors: action.payload,
      };
    default:
      return state;
  }
};
