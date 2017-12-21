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
import { writtenAnswer } from "../../redux/modules/writtenAnswerReducer";
import { connect } from "react-redux";
import BackButton from "../BackButton";

class WrittenAnswer extends Component {
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

  handleWrittenQuestion = value => {
    this.props.dispatch(writtenAnswer(value));
  };

  render() {
    const { formTitle } = this.props;

    return (
      <KeyboardAvoidingView style={styles.writtenContainer} behavior="padding">
        <NavigationBar pageTitle={formTitle} />

        <Text style={styles.writteninstruction}>
          Please enter question and be detailed!
        </Text>
        <TextInput
          multiline={true}
          editable={true}
          style={styles.textInputStyle}
          onChangeText={text => this.handleWrittenQuestion(text)}
        />
        <TouchableOpacity
          onPress={() => goToRoute("surveyCollection")}
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
    writtenQuestion: state.writtenAnswerReducer.writtenAnswer,
    formTitle: state.formTitleReducer.formTitle
  };
};

export default connect(mapStatetoProps)(WrittenAnswer);
