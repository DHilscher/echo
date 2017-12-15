import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CustomButton from '../Buttons/CustomButton'
import { goToRoute } from "../../lib/navigationHelpers"
import { scaleQuestion } from '../../redux/modules/scaleAnswerReducer'
import { connect } from "react-redux"

class Scale extends Component {

  handleScaleQuestion = (value) => {
    this.props.dispatch(scaleQuestion(value))
  }

  render() {
    return (

      <View style={styles.writtenContainer}>
        <View style={styles.logoContainer}><Text>ECHO</Text></View>
        <View style={styles.feedbacktitle}><Text style={styles.sceneTitle}>End of Proj. Eval</Text></View>
        <Text>Please enter question and be detailed!</Text>
        <Text>On a scale of 1 - 10:</Text>
        <TextInput multiline={true} editable={true} style={styles.textInputStyle} onChangeText={(text) => this.handleScaleQuestion(text)}/>
        <TouchableOpacity onPress={() => goToRoute("surveyCollection")} activeOpacity={0.7}>
          <CustomButton btnText={'Add'} />
        </TouchableOpacity>
      </View>

    )
  }
}

const mapStatetoProps = state => {
  return {
    scaleQuestion: state.scaleAnswerReducer.scaleQuestion
  }
}

export default connect(mapStatetoProps)(Scale);