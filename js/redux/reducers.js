import { combineReducers } from "redux";

import { NavigationReducer } from "@expo/ex-navigation";
import RegisterReducer from './modules/register';
import signUpReducer from './modules/signup';
import authReducer from './modules/authentication';
import answerReducer from "./modules/answer";
import firebaseReducer from './modules/firebase';
import projectReducer from './modules/projectReducer';
import writtenAnswerReducer from './modules/writtenAnswerReducer';
import scaleAnswerReducer from './modules/scaleAnswerReducer';
import multipleChoiceReducer from './modules/multipleChoiceReducer';
import formTitleReducer from './modules/formTitle';
import projectListReducer from './modules/projectList';
import sendFormReducer from './modules/sendForm';

export default combineReducers({
  navigation: NavigationReducer,
  register: RegisterReducer,
  signup: signUpReducer,
  auth: authReducer,
  fbuser: firebaseReducer,
  answerReducer,
  projectReducer,
  writtenAnswerReducer,
  scaleAnswerReducer,
  multipleChoiceReducer,
  formTitleReducer,
  projectListReducer,
  sendFormReducer
});
