import React, { Component } from 'react';
import { Text, View, TouchableOpacity, Image} from 'react-native';

import styles from './styles';
import PropTypes from 'prop-types';

import NavigationBar from '../../components/NavigationBar';
import WrittenAnswer from '../../components/WrittenAnswer';
import MultipleChoiceAnswer from '../../components/MultipleChoice/MultipleChoiceAnswer';
import Scale from '../../components/Scale';
import { goToRoute } from "../../lib/navigationHelpers";

const Survey = ({ formTitle }) => {
  return (
    <View style={styles.feedbackContainer}>
      <NavigationBar pageTitle={formTitle}/>

      <View style={styles.feedbackQuestion}><Text style={styles.surveyTitle}>What type of question do you want to ask?</Text></View>
      
      <TouchableOpacity onPress={() => goToRoute("writtenAnswer")} activeOpacity={0.7}><View style={styles.feedbackOptions}><Text style={styles.feedbackTitle}>Written Answer</Text></View></TouchableOpacity>
      <View style={styles.feedbackOptionDivider}></View>
      <TouchableOpacity onPress={() => goToRoute("multipleChoice")} activeOpacity={0.7}><View style={styles.feedbackOptions}><Text style={styles.feedbackTitle}>Multiple Choice</Text></View></TouchableOpacity>
      <View style={styles.feedbackOptionDivider}></View>
      <TouchableOpacity onPress={() => goToRoute("scale")} activeOpacity={0.7}><View style={styles.feedbackOptions}><Text style={styles.feedbackTitle}>Scale</Text></View></TouchableOpacity>
    </View>
  )
}

export default Survey;