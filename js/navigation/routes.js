import { createRouter } from "@expo/ex-navigation";

import Feedback from "../scenes/Feedback";
import Login from "../scenes/Login";
import Onboarding from "../scenes/Onboarding";
import Project from "../scenes/Project";
import Register from "../scenes/Register";
import Results from "../scenes/Results";
import Settings from "../scenes/Settings";
import Home from "../scenes/Home";
import ProjectAdded from "../components/ProjectAdded";
import CreateForm from "../scenes/CreateForm";
import ProjectBasedFeedback from "../scenes/Feedback/ProjectBasedFeedback";
import {
  RegisterP2,
  RegisterP3,
  RegisterP4,
  RegisterP5
} from "../components/Register";
import SendForm from "../scenes/SendForm";
import SendFormEmail from "../scenes/SendForm/SendEmail";

const Router = createRouter(() => ({
  feedback: () => Feedback,
  login: () => Login,
  onboarding: () => Onboarding,
  home: () => Home,
  project: () => Project,
  register: () => Register,
  results: () => Results,
  settings: () => Settings,
  projectAdded: () => ProjectAdded,
  createForm: () => CreateForm,
  projectFeedback: () => ProjectBasedFeedback,
  register2: () => RegisterP2,
  register3: () => RegisterP3,
  register4: () => RegisterP4,
  register5: () => RegisterP5,
  sendForm: () => SendForm,
  sendFormEmail: () => SendFormEmail
}));

export default Router;
