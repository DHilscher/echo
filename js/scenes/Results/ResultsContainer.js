import React, { Component } from "react";
import { Text, View, Image, TextInput, ScrollView } from "react-native";

import Results from "./Results";
import styles from "./styles";
import { colors } from "../../config/styles";
import NavigationBar from "../../components/NavigationBar";
import BackButton from "../../components/BackButton";

class ResultsContainer extends Component {
  constructor() {
    super();
    this.state = {
      ResultTabs: "general"
    };
  }
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

  changeTab = tab => {
    this.setState({ ResultTabs: tab });
  };

  render() {
    return (
      <ScrollView style={styles.resultContainer}>
        <NavigationBar pageTitle="Results" />

        <View style={styles.resultSearch}>
          <TextInput style={styles.searchBar} />
          <Image source={require("../../assets/images/icon-magnifier.png")} />
        </View>

        <Results
          ResultTabs={this.state.ResultTabs}
          changeTab={this.changeTab}
        />
      </ScrollView>
    );
  }
}

export default ResultsContainer;
