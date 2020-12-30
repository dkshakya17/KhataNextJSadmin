import { combineReducers } from "redux";
import { DashboardReducer as dashboard } from "./dashboardReducer";

const appReducers = combineReducers({
  dashboard,
});

const rootReducer = (state, action) => {
  // when a new category is seelcted it will reset redux state
  // if (action.type === actionConstants.INITIAL_CAT_STATE) {
  //   state.category = undefined;
  // }
  return appReducers(state, action);
};

export default rootReducer;
