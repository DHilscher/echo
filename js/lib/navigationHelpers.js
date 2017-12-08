import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "../navigation/routes";

export const goToHome = () => {
  Store.dispatch(NavigationActions.push("root", Router.getRoute("register")));
};

export const goToFeedback = () => {
  Store.dispatch(NavigationActions.push("root", Router.getRoute("feedback")));
};
