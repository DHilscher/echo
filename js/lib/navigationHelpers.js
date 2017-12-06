import { NavigationActions } from "@expo/ex-navigation";
import Store from "../redux/store";
import Router from "../navigation/routes";

export const goToHome = currentNavigatorUID => {
  Store.dispatch(
    NavigationActions.push(currentNavigatorUID, Router.getRoute("register"))
  );
};

// export const goToHome = goToHome => {
//   Store.dispatch(
//     NavigationActions.push("root", Router.getRoute("register", { goToHome }))
//   );
// };
