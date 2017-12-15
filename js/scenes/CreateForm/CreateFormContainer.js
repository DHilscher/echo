import React, { Component } from "react";
import { View } from "react-native";

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
  handleInputChange(text){
    // console.log(text);
  }
  render() {
    return (
      <View>
        <CreateForm handleInputChange={this.handleInputChange} />
      </View>
    );
  }
}

export default CreateFormContainer;
