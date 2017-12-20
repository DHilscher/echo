import React, { Component } from "react";
import { connect } from "react-redux";
import { Text, View, Image, TouchableOpacity, Switch } from "react-native";

import SurveyAnswer from "./SurveyAnswer";
import { getAnswer } from "../../redux/modules/answer";
import BackButton from "../../components/BackButton";

class SurveyAnswerContainer extends Component {
  static route = {
    navigationBar: {
      backgroundColor: "#00000000",
      borderBottomWidth: 0,
      translucent: true,
      header: {
        translucent: true
      },
      renderLeft: (route, props) => <BackButton />
    }
  };

  componentDidMount() {
    this.props.dispatch(getAnswer());
  }

  render() {
    const { answer, passedProps } = this.props;
    // writtenQuestion, scaleQuestion, multipleQuestion

    return answer.map(x => {
      if (passedProps === x.author) {
        return <SurveyAnswer key={x.title} answer={x} />;
      }
    });
  }
}

function mapStateToProps(state) {
  return {
    answer: state.answerReducer.answer
    // writtenQuestion: state.writtenAnswerReducer.writtenAnswer,
    // scaleQuestion: state.scaleAnswerReducer.scaleQuestion,
    // multipleQuestion: state.multipleChoiceReducer.multipleChoice
  };
}

export default connect(mapStateToProps)(SurveyAnswerContainer);
