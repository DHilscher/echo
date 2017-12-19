import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CustomButton from '../Buttons/CustomButton';
import NavigationBar from '../NavigationBar';
import { goToRoute } from "../../lib/navigationHelpers";
import { writtenAnswer } from '../../redux/modules/writtenAnswerReducer'
import { connect } from "react-redux";

class WrittenAnswer extends Component {

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

  handleWrittenQuestion = (value) => {
    this.props.dispatch(writtenAnswer(value))
  }

  render() {
    const { formTitle } = this.props;

    return (
      <View style={styles.writtenContainer}>
        <NavigationBar pageTitle={formTitle} />

        <Text style={styles.writteninstruction}>Please enter question and be detailed!</Text>
        <TextInput multiline={true} editable={true} style={styles.textInputStyle} onChangeText={(text) => this.handleWrittenQuestion(text)}/>
        <TouchableOpacity onPress={() => goToRoute("surveyCollection")} activeOpacity={0.7}>
          <CustomButton btnText={'Add'} />
        </TouchableOpacity>
        <Image style={styles.target} source={require ('../../assets/images/icon-target.png')}/>
      </View>   
    )
  }
}

const mapStatetoProps = state => {
  return {
    writtenQuestion: state.writtenAnswerReducer.writtenAnswer,
    formTitle: state.formTitleReducer.formTitle,
  }
}

export default connect(mapStatetoProps)(WrittenAnswer);