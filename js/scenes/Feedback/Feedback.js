import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'

const Feedback = ({}) => {
  return (
    <View style={styles.feedbackContainer}>
      <View style={styles.logoContainer}><Text>ECHO</Text></View>
      <View style={styles.feedbacktitle}><Text>Feedback</Text></View>
      <View style={styles.feedbackQuestion}><Text>What type of feedback are you looking for?</Text></View>
      <TouchableOpacity activeOpacity={0.7}><View style={styles.feedbackOptions}><Text>Project based feedback</Text></View></TouchableOpacity>
      <View style={styles.feedbackOptionDivider}></View>
      <TouchableOpacity activeOpacity={0.7}><View style={styles.feedbackOptions2}><Text>General feedback</Text></View></TouchableOpacity>
    </View>
  )
}

export default Feedback