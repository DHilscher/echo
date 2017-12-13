import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'
import CustomButton from '../../components/Buttons/CustomButton'

import { goToRoute } from "../../lib/navigationHelpers";
import SurveyQuestion from '../../components/SurveyQuestion'
import { connect } from "react-redux";

const question = 'How was sjgjsdkgjdshglsd'

class SurveyCollection extends Component {

  render() {
    const {multipleQuestion, writtenQuestion, scaleQuestion} = this.props
    console.log('surColl',this.props.multipleQuestion)
    console.log('surColl',this.props.writtenQuestion)
    console.log('surColl',this.props.scaleQuestion)

    let collection = []

    if(writtenQuestion){
      collection.push({'type':'Written answer', 'question':writtenQuestion})
    }

    if(multipleQuestion){
      collection.push({'type':'Multiple choice', 'question':multipleQuestion})
    }

    if(scaleQuestion){
      collection.push({'type':'Scale answer', 'question':scaleQuestion})
    }


    return (
      <View style={styles.feedbackContainer}>
        <View style={styles.logoContainer}><Text>ECHO</Text></View>
        <View style={styles.feedbacktitle}><Text>End of Proj. Eval</Text></View>

      {collection.map((survey, index) => (
        <SurveyQuestion key={survey.question} surveyQuestion={survey.question.length > 10 ? `${survey.question.slice(0, 15)}...` : survey.question} surveyType={survey.type} surveyNum={index+1} />
      ))}
  
      <TouchableOpacity onPress={() => goToRoute("survey")} activeOpacity={0.7}>
        <CustomButton btnText={'PLUS'} />
      </TouchableOpacity>
  
      <TouchableOpacity onPress={() => goToRoute("surveyCollection")} activeOpacity={0.7}>
        <CustomButton btnText={'Next'} />
      </TouchableOpacity>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    multipleQuestion: state.multipleChoiceReducer.multipleChoice,
    writtenQuestion: state.writtenAnswerReducer.writtenAnswer,
    scaleQuestion: state.scaleAnswerReducer.scaleQuestion
    
  }
}

export default connect(mapStateToProps)(SurveyCollection)