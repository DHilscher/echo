import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Text, View, Image, TouchableOpacity, Switch } from 'react-native'


import SurveyAnswer from './SurveyAnswer'
import { getAnswer } from '../../redux/modules/answer';

class SurveyAnswerContainer extends Component {

  componentDidMount(){
    this.props.dispatch(getAnswer())
  }

  render() {
    const {answer} = this.props
    return (
      answer.map(x => (
        <SurveyAnswer key={x.title} answer={x}/>
      ))
    )
  }
}

function mapStateToProps(state){
  return {
    answer: state.answerReducer.answer
  }
}

export default connect(mapStateToProps)(SurveyAnswerContainer)