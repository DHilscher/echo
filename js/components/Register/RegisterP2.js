import React, { Component } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import { connect } from "react-redux";
import { styles } from "./styles";
import { colors } from "../../config/styles";
import { goToRoute } from "../../lib/navigationHelpers";
import { fullname } from "../../redux/modules/signup";
import ArrowButton from "../Buttons/ArrowButton";
import TopStepIndicator from "../TopStepIndicator";
import CustomSingleTextField from "../CustomTextField/CustomSingleTextField";

class Register2 extends Component {
  handleNameChange = value => {
    this.props.dispatch(fullname(value));
  };

  render() {
    return (
      <KeyboardAvoidingView style={styles.registerContainer} behavior="padding">
        <Image
          style={styles.image}
          source={require("../../assets/images/registration/registration-2.png")}
        />

        <View style={styles.stepIndicatorWrapper}>
          <TopStepIndicator stepCount={3} currentPosition={0} />
        </View>

        <View style={styles.wholeContentContainer}>
          <View style={styles.registerContentContainer}>
            <View style={styles.contentQuestionWrapper}>
              <Text style={styles.registerExplainText}>
                Tell us more about yourself?
              </Text>
              <CustomSingleTextField
                placeholder="Your first name & last name"
                handler={text => this.handleNameChange(text)}
              />
            </View>

            <View style={styles.arrowButtonWrapper}>
              <TouchableOpacity onPress={() => goToRoute("register3")}>
                <ArrowButton color={colors.red} />
              </TouchableOpacity>
            </View>

            <TouchableOpacity onPress={() => goToRoute("login")}>
              <Text style={styles.loginText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = state => {
  return {
    fullname: state.signup.fullname
  };
};

export default connect(mapStateToProps)(Register2);
