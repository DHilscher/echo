import React, { Component } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

import styles from "./styles";
import { colors } from '../../config/styles';
import { goToRoute } from "../../lib/navigationHelpers";
import CustomButton from "../../components/Buttons/CustomButton";
import NavigationBar from "../../components/NavigationBar";
import CustomSingleTextField from "../../components/CustomTextField/CustomSingleTextField";

class SendEmail extends Component {

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

  constructor() {
    super();
    this.state = {
      customMessage: false,
    };
  }

  handleCustomMessage = () => {
    if (this.state.customMessage === true) {
      this.setState({ customMessage: false });
    } else {
      this.setState({ customMessage: true });
    }
  };

  render() {
    console.log(this.state.customMessage)
    return (
      <ScrollView style={styles.sendFormContainer}>
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
              <View style={styles.optionContentWrapper}>
                <TouchableOpacity activeOpacity={0.7} onPress={() => this.handleCustomMessage()}>
                  <Icon
                    name={
                      this.state.customMessage === false ? ("ios-square-outline") : ("ios-checkbox-outline")
                    }
                    size={44}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.optionText}>Customize recipient message</Text>
              </View>
            </View>

            <View style={styles.optionWrapper}>
              <View style={styles.optionContentWrapper}>
                <TouchableOpacity activeOpacity={0.7}>
                  <Icon
                    name="ios-add-circle-outline"
                    size={44}
                    color="white"
                  />
                </TouchableOpacity>
                <Text style={styles.optionText}>Add another recipient</Text>
              </View>
            </View>
          </View>
        </View>
        
        <TouchableOpacity activeOpacity={0.7} onPress={() => goToRoute("formSent")}>
          <CustomButton btnText={'Send'} />
        </TouchableOpacity>
        
      </ScrollView>
    );
  }
}

export default SendEmail;