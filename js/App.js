import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";

import SettingsContainer from './scenes/Settings'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <SettingsContainer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
