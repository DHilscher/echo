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
import CustomButton from "../Buttons/CustomButton";
import NavigationBar from "../NavigationBar";
import { goToRoute } from "../../lib/navigationHelpers";
import {
  multipleChoiceAnswersA,
  multipleChoiceAnswersB,
  multipleChoiceAnswersC,
  multipleChoiceAnswersD
} from "../../redux/modules/multipleChoiceReducer";
import { connect } from "react-redux";
import BackButton from "../BackButton";

class MultipleChoiceAnswer extends Component {
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

  handleAnswerA = value => {
    this.props.dispatch(multipleChoiceAnswersA(value));
  };

  handleAnswerB = value => {
    this.props.dispatch(multipleChoiceAnswersB(value));
  };

  handleAnswerC = value => {
    this.props.dispatch(multipleChoiceAnswersC(value));
  };

  handleAnswerD = value => {
    this.props.dispatch(multipleChoiceAnswersD(value));
  };

  render() {
    const { formTitle } = this.props;

    return (
      <KeyboardAvoidingView style={styles.multipleContainer} behavior="padding">
        <NavigationBar pageTitle={formTitle} />

        <Text style={styles.multipleinstruction}>
          Please enter your choices.
        </Text>

        <View style={styles.MCAnswerView}>
          <Text style={styles.letteroption}>A</Text>
          <TextInput
            editable={true}
            style={styles.textInputOptionStyle}
            onChangeText={text => this.handleAnswerA(text)}
          />
        </View>
        <View style={styles.MCAnswerView}>
          <Text style={styles.letteroption}>B</Text>
          <TextInput
            editable={true}
            style={styles.textInputOptionStyle}
            onChangeText={text => this.handleAnswerB(text)}
          />
        </View>
        <View style={styles.MCAnswerView}>
          <Text style={styles.letteroption}>C</Text>
          <TextInput
            editable={true}
            style={styles.textInputOptionStyle}
            onChangeText={text => this.handleAnswerC(text)}
          />
        </View>
        <View style={styles.MCAnswerView}>
          <Text style={styles.letteroption}>D</Text>
          <TextInput
            editable={true}
            style={styles.textInputOptionStyle}
            onChangeText={text => this.handleAnswerD(text)}
          />
        </View>

        <TouchableOpacity
          style={styles.addbutton}
          onPress={() => goToRoute("surveyCollection")}
          activeOpacity={0.7}
        >
          <CustomButton btnText={"Add"} />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}

const mapStatetoProps = state => {
  return {
    multipleAnswersA: state.multipleChoiceReducer.multipleChoiceAnswersA,
    multipleAnswersB: state.multipleChoiceReducer.multipleChoiceAnswersB,
    multipleAnswersC: state.multipleChoiceReducer.multipleChoiceAnswersC,
    multipleAnswersD: state.multipleChoiceReducer.multipleChoiceAnswersD,
    formTitle: state.formTitleReducer.formTitle
  };
};

export default connect(mapStatetoProps)(MultipleChoiceAnswer);
