import React, { Component } from "react";
import { Text, View } from "react-native";

import SendMessage from "./SendMessage";
import SendEmail from "./SendEmail";
import { colors } from "../../config/styles";
import BackButton from "../../components/BackButton";

class SendFormContainer extends Component {
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
        <SendMessage />
      </View>
    );
  }
}

export default SendFormContainer;
