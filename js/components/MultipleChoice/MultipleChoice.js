import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import CustomButton from '../Buttons/CustomButton';
import NavigationBar from '../NavigationBar';
import { goToRoute } from "../../lib/navigationHelpers";
import { multipleChoiceQuestion } from '../../redux/modules/multipleChoiceReducer'
import { connect } from "react-redux";

class MultipleChoice extends Component {
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

  handleMultipleQuestion = (value) => {
    this.props.dispatch(multipleChoiceQuestion(value))
  }

  render() { 
    const { formTitle } = this.props;

    return (
      <View style={styles.multipleContainer}>
        <NavigationBar pageTitle={formTitle} />

        <Text style={styles.multipleinstruction}>Please enter question and be detailed!</Text>

        <TextInput multiline={true} editable={true} style={styles.textInputStyle} onChangeText={(text) => this.handleMultipleQuestion(text)} />

        <TouchableOpacity onPress={() => goToRoute("multipleChoiceAnswer")} activeOpacity={0.7}>
          <CustomButton btnText={'Add'} />
        </TouchableOpacity>

        <Image style={styles.target} source={require ('../../assets/images/icon-target.png')}/>

      </View>

    )
  }
}

const mapStatetoProps = state => {
  return {
    multipleQuestion: state.multipleChoiceReducer.multipleChoice,
    formTitle: state.formTitleReducer.formTitle,
  }
}

export default connect(mapStatetoProps)(MultipleChoice);