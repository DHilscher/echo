import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import SuccessPage from "../../components/SuccessPage";
import styles from "./styles";

class ProjectAdded extends Component {
  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      borderBottomWidth: 0,
      translucent: true,
      header: {
        translucent: true
      }
    }
  };
  render() {
    return <SuccessPage successText="Your project has been added!" />;
  }
}

export default ProjectAdded;
