import { createRouter } from "@expo/ex-navigation";

import Feedback from "../scenes/Feedback";
import Login from "../scenes/Login";
import Onboarding from "../scenes/Onboarding";
import Project from "../scenes/Project";
import Register from "../scenes/Register";
import Results from "../scenes/Results";
import Settings from "../scenes/Settings";
import Home from "../scenes/Home";

const Router = createRouter(() => ({
  feedback: () => Feedback,
  login: () => Login,
  onboarding: () => Onboarding,
  home: () => Home,
  project: () => Project,
  register: () => Register,
  results: () => Results,
  settings: () => Settings
}));

export default Router;
