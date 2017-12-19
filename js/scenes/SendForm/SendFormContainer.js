import React, { Component } from "react";
import { Text, View } from "react-native";

import SendMessage from './SendMessage';
import SendEmail from './SendEmail';

class SendFormContainer extends Component {
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
        <SendMessage />
      </View>
    );
  }
}

export default SendFormContainer;
