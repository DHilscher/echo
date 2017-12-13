import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { goToRoute } from "../../lib/navigationHelpers";
import NavigationBar from "../../components/NavigationBar";
import CustomSquareButton from "../../components/Buttons/CustomSquareButton";

class ProjectBasedFeedback extends Component {
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
      <ScrollView style={styles.projectContainer}>
        <NavigationBar pageTitle="Feedback"/>
        
        <View style={styles.questionWrapper}>
          <Text style={styles.questionText}>
            Choose a project!
          </Text>
        </View>

        <View style={styles.optionProjectWrapper}>
          <TouchableOpacity onPress={() => goToRoute("createForm")} activeOpacity={0.7}>
            <CustomSquareButton btnText="Juice Truck"/>
          </TouchableOpacity>
          
        </View>
      </ScrollView>
    );
  }
}

export default ProjectBasedFeedback;
