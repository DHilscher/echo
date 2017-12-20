import React, { Component } from "react";
import { Text, View } from "react-native";

import FeedBack from "./Feedback";
import { colors } from "../../config/styles";
import BackButton from "../../components/BackButton";

class FeedbackContainer extends Component {
  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      borderBottomWidth: 0,
      translucent: true,
      header: {
        translucent: true
      },
      renderLeft: (route, props) => <BackButton />
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
