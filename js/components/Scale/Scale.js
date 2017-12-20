import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import { colors } from "../../config/styles";
import CustomButton from '../Buttons/CustomButton';
import NavigationBar from '../NavigationBar';
import { goToRoute } from "../../lib/navigationHelpers";
import { scaleQuestion } from '../../redux/modules/scaleAnswerReducer';
import { connect } from "react-redux"

class Scale extends Component {

  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      tintColor: colors.darkGreen,
      borderBottomWidth: 0,
      translucent: true,
      header: {
        translucent: true
      }
    }
  };

  handleScaleQuestion = (value) => {
    this.props.dispatch(scaleQuestion(value))
  }

  render() {
    const { formTitle } = this.props;
    return (
      <View style={styles.scaleContainer}>
        <NavigationBar pageTitle={formTitle} />

        <Text style={styles.scaleinstruction}>Please enter question and be detailed!</Text>

        <Text style={styles.scaleinstruction}>On a scale of 1 - 10:</Text>

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
    scaleQuestion: state.scaleAnswerReducer.scaleQuestion,
    formTitle: state.formTitleReducer.formTitle,
  }
}

export default connect(mapStatetoProps)(Scale);