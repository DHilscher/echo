import React, { Component } from "react";
import { Text, View } from "react-native";

import CreateForm from "./CreateForm";

class CreateFormContainer extends Component {
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
        <CreateForm />
      </View>
    );
  }
}

export default CreateFormContainer;
