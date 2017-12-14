import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CustomButton from '../Buttons/CustomButton'
import { goToRoute } from "../../lib/navigationHelpers";
import { multipleChoiceQuestion } from '../../redux/modules/multipleChoiceReducer'
import { connect } from "react-redux";

class MultipleChoice extends Component {

  handleMultipleQuestion = (value) => {
    this.props.dispatch(multipleChoiceQuestion(value))
  }

  render() { 
    return (

      <View>
        <View style={styles.logoContainer}><Text>ECHO</Text></View>
        <View style={styles.feedbacktitle}><Text>End of Proj. Eval</Text></View>
        <Text>Please enter question and be detailed!</Text>
        <TextInput multiline={true} editable={true} style={styles.textInputStyle} onChangeText={(text) => this.handleMultipleQuestion(text)} />
        <TouchableOpacity onPress={() => goToRoute("multipleChoiceAnswer")} activeOpacity={0.7}>
          <CustomButton btnText={'Add'} />
        </TouchableOpacity>
      </View>

    )
  }
}

const mapStatetoProps = state => {
  return {
    multipleQuestion: state.multipleChoiceReducer.multipleChoice
  }
}

export default connect(mapStatetoProps)(MultipleChoice);