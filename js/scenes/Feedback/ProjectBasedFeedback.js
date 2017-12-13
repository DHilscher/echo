import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";

import styles from "./styles";
import PropTypes from "prop-types";

class ProjectBasedFeedback extends Component {
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
    return (
      <View style={styles.feedbackContainer}>
        <View style={styles.logoContainer}>
          <Text>ECHO</Text>
        </View>
        <View style={styles.feedbacktitle}>
          <Text>Feedback</Text>
        </View>
        <View style={styles.feedbackQuestion}>
          <Text>Choose a project!</Text>
        </View>
        <Text>Juice Truck</Text>
      </View>
    );
  }
}

export default ProjectBasedFeedback;
