import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
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

      <View style={styles.multipleContainer}>
        <View style={styles.headerNavBarWrapper}>
          <Image style={styles.headerNavBar} source={require ('../../assets/images/main-nav-bar.png')}/>
        </View>

        <View style={styles.multipletitlecontainer}><Text style={styles.scenetitle}>End of Proj. Eval</Text></View>

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
    multipleQuestion: state.multipleChoiceReducer.multipleChoice
  }
}

export default connect(mapStatetoProps)(MultipleChoice);