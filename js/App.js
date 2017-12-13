import React, { Component } from "react";
import firebase from './config/firebase';
import {
  NavigationContext,
  NavigationProvider,
  StackNavigation
} from "@expo/ex-navigation";
import Router from "./navigation/routes";
import Store from "./redux/store";
import { Provider } from "react-redux";

import { login, logout } from './redux/modules/authentication';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
});

firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    Store.dispatch(login(user))
  } else {
    Store.dispatch(logout())
  }
})

class App extends Component {

  render() {
    return (
      <Provider store={Store}>
        <NavigationProvider context={navigationContext} router={Router}>

          <StackNavigation
            navigatorUID="root"
            id="root"
            initialRoute={Router.getRoute("login")}
          />
        </NavigationProvider>
      </Provider>
    );
  }
}

export default App
