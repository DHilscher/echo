import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "../navigation/routes";

export const goToRoute = route => {
  Store.dispatch(NavigationActions.push("root", Router.getRoute(`${route}`)));
};
