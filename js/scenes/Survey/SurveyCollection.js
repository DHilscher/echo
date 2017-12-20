import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import PropTypes from "prop-types";
import CustomButton from "../../components/Buttons/CustomButton";

import { goToRoute } from "../../lib/navigationHelpers";
import SurveyQuestion from "../../components/SurveyQuestion";
import { connect } from "react-redux";
import AddButton from "../../components/Buttons/AddButton";
import NavigationBar from "../../components/NavigationBar";
import { colors } from "../../config/styles";
import BackButton from "../../components/BackButton";

const question = "How was sjgjsdkgjdshglsd";

class SurveyCollection extends Component {
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

  render() {
    const {
      multipleQuestion,
      writtenQuestion,
      scaleQuestion,
      formTitle
    } = this.props;
    let collection = [];

    if (writtenQuestion) {
      collection.push({ type: "Written answer", question: writtenQuestion });
    }

    if (multipleQuestion) {
      collection.push({ type: "Multiple choice", question: multipleQuestion });
    }

    if (scaleQuestion) {
      collection.push({ type: "Scale answer", question: scaleQuestion });
    }

    return (
      <View style={styles.feedbackContainer}>
        <NavigationBar pageTitle={formTitle} />

        {collection.map((survey, index) => (
          <SurveyQuestion
            key={survey.question}
            surveyQuestion={
              survey.question.length > 10 ? (
                `${survey.question.slice(0, 15)}...`
              ) : (
                survey.question
              )
            }
            surveyType={survey.type}
            surveyNum={index + 1}
          />
        ))}

        <TouchableOpacity
          onPress={() => goToRoute("survey")}
          activeOpacity={0.7}
          style={styles.addbutton}
        >
          <AddButton />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => goToRoute("sendMessage")}
          activeOpacity={0.7}
          style={styles.nextbutton}
        >
          <CustomButton btnText={"Next"} />
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    multipleQuestion: state.multipleChoiceReducer.multipleChoice,
    writtenQuestion: state.writtenAnswerReducer.writtenAnswer,
    scaleQuestion: state.scaleAnswerReducer.scaleQuestion,
    formTitle: state.formTitleReducer.formTitle
  };
};

export default connect(mapStateToProps)(SurveyCollection);
