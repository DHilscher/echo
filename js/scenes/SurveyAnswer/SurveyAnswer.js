import React from 'react'
import { Text, View, Image, TouchableOpacity, Switch } from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'

const SurveyAnswer = ({answer}) => {
  return (
    <View>
      <View>
        <Text>{answer.title}</Text>
        <Text>{answer.answer1}</Text>
        <Text>{answer.answer2}</Text>
        <Text>{answer.scale}</Text>
        <Text>{answer.answer3}</Text>
      </View>
    </View>
  )
}

export default SurveyAnswer