import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";
import RegisterReducer from './modules/register'

export default combineReducers({
  navigation: NavigationReducer,
  register: RegisterReducer
});
