import React, { Component } from "react";
import { Text } from "react-native";
import { withNavigation, NavigationActions } from "@expo/ex-navigation";
import Store from "../../redux/store";
import Icon from "react-native-vector-icons/Ionicons";
import styles from "./styles";

@withNavigation
class BackButton extends Component {
  render() {
    return (
      <Icon
        onPress={this._goBack}
        style={styles.backButton}
        name="ios-arrow-back"
        size={38}
        color="#0D5355"
      />
    );
  }

  _goBack = () => {
    Store.dispatch(NavigationActions.goBack());
  };
}

export default BackButton;
