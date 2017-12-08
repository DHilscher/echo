import React, { Component } from "react";
import { Text, View } from "react-native";

import SendForm from './SendForm'
import SendEmail from './SendEmail'

class SendFormContainer extends Component {
  render() {
    return (
      <View>
        <SendForm />
      </View>
    );
  }
}

export default SendFormContainer;
