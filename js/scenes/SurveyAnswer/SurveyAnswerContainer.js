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
    const {answer, passedProps} = this.props
    // writtenQuestion, scaleQuestion, multipleQuestion

    return (
      
      answer.map(x => {
        if(passedProps===x.author){
          return <SurveyAnswer key={x.title} answer={x} />
        }
      })
    )
  }
}

function mapStateToProps(state){
  return {
    answer: state.answerReducer.answer,
    // writtenQuestion: state.writtenAnswerReducer.writtenAnswer,
    // scaleQuestion: state.scaleAnswerReducer.scaleQuestion,
    // multipleQuestion: state.multipleChoiceReducer.multipleChoice
  }
}

export default connect(mapStateToProps)(SurveyAnswerContainer)