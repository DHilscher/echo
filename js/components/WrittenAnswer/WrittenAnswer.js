import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CustomButton from '../Buttons/CustomButton'
import { goToRoute } from "../../lib/navigationHelpers";
import { writtenAnswer } from '../../redux/modules/writtenAnswerReducer'
import { connect } from "react-redux";

class WrittenAnswer extends Component {

  handleWrittenQuestion = (value) => {
    this.props.dispatch(writtenAnswer(value))
  }

  render() {
    return (

      <View style={styles.writtenContainer}>
        <View style={styles.logoContainer}><Text>ECHO</Text></View>
        <View style={styles.feedbacktitle}><Text style={styles.sceneTitle}>End of Proj. Eval</Text></View>
        <Text>Please enter question and be detailed!</Text>
        <TextInput multiline={true} editable={true} style={styles.textInputStyle} onChangeText={(text) => this.handleWrittenQuestion(text)}/>
        <TouchableOpacity onPress={() => goToRoute("surveyCollection")} activeOpacity={0.7}>
          <CustomButton btnText={'Add'} />
        </TouchableOpacity>
      </View>
      
    )
  }
}

const mapStatetoProps = state => {
  return {
    writtenQuestion: state.writtenAnswerReducer.writtenAnswer
  }
}

export default connect(mapStatetoProps)(WrittenAnswer);