import React, { Component } from "react";
import { Text, View } from "react-native";

import CreateForm from './CreateForm'

class CreateFormContainer extends Component {
  render() {
    return (
      <View>
        <CreateForm />
      </View>
    );
  }
}

export default CreateFormContainer;
