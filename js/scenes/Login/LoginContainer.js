import React, { Component } from "react";
import { Text, View } from "react-native";
import Login from "./Login";
import { connect } from "react-redux";

class LoginContainer extends Component {
  render() {
    const { currentNavigatorUID } = this.props;
    console.log(currentNavigatorUID);

    return (
      <View>
        <Login currentNavigatorUID={currentNavigatorUID} />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentNavigatorUID: state.navigation.currentNavigatorUID
  };
};
export default connect(mapStateToProps)(LoginContainer);
