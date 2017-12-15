import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
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

      <View style={styles.multipleContainer}>
        <View style={styles.headerNavBarWrapper}>
          <Image style={styles.headerNavBar} source={require ('../../assets/images/main-nav-bar.png')}/>
        </View>

        <View style={styles.multipletitlecontainer}><Text style={styles.scenetitle}>End of Proj. Eval</Text></View>

        <Text style={styles.multipleinstruction}>Please enter your choices.</Text>
    
        <View style={styles.MCAnswerView}><Text style={styles.letteroption}>A</Text><TextInput editable={true} style={styles.textInputOptionStyle} onChangeText={(text) => this.handleAnswerA(text)} /></View>
        <View style={styles.MCAnswerView}><Text style={styles.letteroption}>B</Text><TextInput editable={true} style={styles.textInputOptionStyle} onChangeText={(text) => this.handleAnswerB(text)} /></View>
        <View style={styles.MCAnswerView}><Text style={styles.letteroption}>C</Text><TextInput editable={true} style={styles.textInputOptionStyle} onChangeText={(text) => this.handleAnswerC(text)} /></View>
        <View style={styles.MCAnswerView}><Text style={styles.letteroption}>D</Text><TextInput editable={true} style={styles.textInputOptionStyle} onChangeText={(text) => this.handleAnswerD(text)} /></View>

        <TouchableOpacity style={styles.addbutton}onPress={() => goToRoute("surveyCollection")} activeOpacity={0.7}>
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