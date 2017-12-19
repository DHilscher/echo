import React, { Component } from "react";
import { Text, View } from "react-native";

import Survey from './Survey'

class SurveyContainer extends Component {
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
      <View>
        <Survey />
      </View>
    );
  }
}

export default SurveyContainer;
