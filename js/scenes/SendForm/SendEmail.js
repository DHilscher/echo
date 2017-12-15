import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import { colors } from '../../config/styles';
import { goToRoute } from "../../lib/navigationHelpers";
import CustomButton from "../../components/Buttons/CustomButton";
import NavigationBar from "../../components/NavigationBar";
import CustomSingleTextField from "../../components/CustomTextField/CustomSingleTextField";

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
      <View style={styles.sendFormContainer}>
        <NavigationBar pageTitle="Send Form" />

        <View style={styles.sentRecipientWrapper}>
          <View style={styles.sentRecipientCenter}>
            <Text style={styles.sentRecipientText}>Name</Text>
            <TouchableOpacity activeOpacity={0.7}>
              <Icon
                name="ios-close-circle-outline"
                size={44}
                color={colors.red}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.sendEmailContentWrapper}>
          <CustomSingleTextField placeholder="Recipient Name" />
          <CustomSingleTextField placeholder="Email" />

          <View style={styles.optionsContainer}>

            <View style={styles.optionWrapper}>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.optionContentWrapper}>
                  <Icon
                    name="ios-checkbox-outline"
                    size={44}
                    color="white"
                  />
                  <Text style={styles.optionText}>Customize recipient message</Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.optionWrapper}>
              <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.optionContentWrapper}>
                  <Icon
                    name="ios-add-circle-outline"
                    size={44}
                    color="white"
                  />
                  <Text style={styles.optionText}>Add another recipient</Text>
                </View>
            </TouchableOpacity>
            </View>
          </View>
        </View>
        
        <TouchableOpacity activeOpacity={0.7} onPress={() => goToRoute("sendForm")}>
          <CustomButton btnText={'Send'} />
        </TouchableOpacity>
        
      </View>
    );
  }
}

export default ProjectBasedFeedback;