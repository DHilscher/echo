import React, { Component } from "react";
import { Text, View, TextInput, TouchableOpacity, Image } from "react-native";

import SuccessPage from "../../components/SuccessPage";
import styles from "./styles";

class ProjectAdded extends Component {
  static route = {
    navigationBar: {
      title: "New Project"
    }
  };
  render() {
    return <SuccessPage successText="Your project has been added!" />;
  }
}

export default ProjectAdded;
