import React, { Component } from "react";
import { Text, View } from "react-native";

import FeedBack from "./Feedback";
import { colors } from "../../config/styles";

class FeedbackContainer extends Component {
  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      tintColor: colors.darkGreen,
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
        <FeedBack />
      </View>
    );
  }
}

export default FeedbackContainer;
