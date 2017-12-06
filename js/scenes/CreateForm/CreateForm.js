import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'

const CreateFormStep1 = ({}) => {
  return (
    <View style={styles.feedbackContainer}>
      <View style={styles.logoContainer}><Text>ECHO</Text></View>
      <View style={styles.feedbacktitle}><Text>Name your form</Text></View>
      <View style={styles.feedbackQuestion}><Text>Start getting the answers you need! Add a question to get started.</Text></View>
    </View>
  )
}

export default CreateFormStep1 