import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles';

const SurveyQuestion = ({ surveyQuestion, surveyType, surveyNum }) => (
    <View style={styles.survey}>
      <View style={styles.index}>
        <Text style={styles.number}>{surveyNum}</Text>
      </View>
      
      <Text style={styles.question}>{surveyQuestion}</Text>
      <Text style={styles.type}>Type: {surveyType}</Text>

    </View>
);

SurveyQuestion.propTypes = {
  surveyQuestion: PropTypes.string.isRequired,
  surveyType: PropTypes.string.isRequired,
  surveyNum: PropTypes.number.isRequired,
};

export default SurveyQuestion;
