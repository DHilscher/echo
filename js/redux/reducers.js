import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";

import ProjectReducer from "./modules/project";

export default combineReducers({
  navigation: NavigationReducer,
  project: ProjectReducer
});
