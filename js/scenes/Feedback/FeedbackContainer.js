import React, { Component } from "react";
import { Text, View } from "react-native";

import FeedBack from './Feedback'

class FeedbackContainer extends Component {
  render() {
    return (
      <View>
        <FeedBack />
      </View>
    );
  }
}

export default FeedbackContainer;
