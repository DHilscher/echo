import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";
import RegisterReducer from './modules/register'

import ProjectReducer from "./modules/project";

export default combineReducers({
  navigation: NavigationReducer,
  register: RegisterReducer,
  project: ProjectReducer
});
