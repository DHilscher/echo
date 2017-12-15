import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CustomButton from '../Buttons/CustomButton'
import { goToRoute } from "../../lib/navigationHelpers";
import { multipleChoiceAnswersA, multipleChoiceAnswersB, multipleChoiceAnswersC, multipleChoiceAnswersD } from '../../redux/modules/multipleChoiceReducer'
import { connect } from "react-redux";

class MultipleChoiceAnswer extends Component {

  handleAnswerA = (value) => {
    this.props.dispatch(multipleChoiceAnswersA(value))
  }

  handleAnswerB = (value) => {
    this.props.dispatch(multipleChoiceAnswersB(value))
  }

  handleAnswerC = (value) => {
    this.props.dispatch(multipleChoiceAnswersC(value))
  }

  handleAnswerD = (value) => {
    this.props.dispatch(multipleChoiceAnswersD(value))
  }

  render() {
    return (

      <View>
        <View style={styles.logoContainer}><Text>ECHO</Text></View>
        <View style={styles.feedbacktitle}><Text>End of Proj. Eval</Text></View>
        <Text>Please enter your choices.</Text>
    
        <View style={styles.MCAnswerView}><Text>A</Text><TextInput editable={true} style={styles.textInputStyle} onChangeText={(text) => this.handleAnswerA(text)} /></View>
        <View style={styles.MCAnswerView}><Text>B</Text><TextInput editable={true} style={styles.textInputStyle} onChangeText={(text) => this.handleAnswerB(text)} /></View>
        <View style={styles.MCAnswerView}><Text>C</Text><TextInput editable={true} style={styles.textInputStyle} onChangeText={(text) => this.handleAnswerC(text)} /></View>
        <View style={styles.MCAnswerView}><Text>D</Text><TextInput editable={true} style={styles.textInputStyle} onChangeText={(text) => this.handleAnswerD(text)} /></View>
        <TouchableOpacity onPress={() => goToRoute("surveyCollection")} activeOpacity={0.7}>
          <CustomButton btnText={'Add'} />
        </TouchableOpacity>
      </View>

    )
  }
}

const mapStatetoProps = state => {
  return {
    multipleAnswersA: state.multipleChoiceReducer.multipleChoiceAnswersA,
    multipleAnswersB: state.multipleChoiceReducer.multipleChoiceAnswersB,
    multipleAnswersC: state.multipleChoiceReducer.multipleChoiceAnswersC,
    multipleAnswersD: state.multipleChoiceReducer.multipleChoiceAnswersD,
  }
}

export default connect(mapStatetoProps)(MultipleChoiceAnswer)