import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";
import RegisterReducer from './modules/register';
import signUpReducer from './modules/signup';
import authReducer from './modules/authentication';
import answerReducer from "./modules/answer"
import ProjectNav from "./modules/project";
import projectReducer from './modules/projectReducer'

export default combineReducers({
  navigation: NavigationReducer,
  register: RegisterReducer,
  project: ProjectNav,
  signup: signUpReducer,
  auth: authReducer,
  answerReducer,
  projectReducer,
});
