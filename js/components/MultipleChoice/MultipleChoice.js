import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView
} from "react-native";
import PropTypes from "prop-types";

import styles from "./styles";
import { colors } from "../../config/styles";
import CustomButton from "../Buttons/CustomButton";
import NavigationBar from "../NavigationBar";
import { goToRoute } from "../../lib/navigationHelpers";
import { multipleChoiceQuestion } from "../../redux/modules/multipleChoiceReducer";
import { connect } from "react-redux";
import BackButton from "../BackButton";

class MultipleChoice extends Component {
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

  handleMultipleQuestion = value => {
    this.props.dispatch(multipleChoiceQuestion(value));
  };

  render() {
    const { formTitle } = this.props;

    return (
      <KeyboardAvoidingView style={styles.multipleContainer} behavior="padding">
        <NavigationBar pageTitle={formTitle} />

        <Text style={styles.multipleinstruction}>
          Please enter question and be detailed!
        </Text>

        <TextInput
          multiline={true}
          editable={true}
          style={styles.textInputStyle}
          onChangeText={text => this.handleMultipleQuestion(text)}
        />

        <TouchableOpacity
          onPress={() => goToRoute("multipleChoiceAnswer")}
          activeOpacity={0.7}
        >
          <CustomButton btnText={"Add"} />
        </TouchableOpacity>

        <Image
          style={styles.target}
          source={require("../../assets/images/icon-target.png")}
        />
      </KeyboardAvoidingView>
    );
  }
}

const mapStatetoProps = state => {
  return {
    multipleQuestion: state.multipleChoiceReducer.multipleChoice,
    formTitle: state.formTitleReducer.formTitle
  };
};

export default connect(mapStatetoProps)(MultipleChoice);
