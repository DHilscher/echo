import React, { Component } from 'react';
import { Text, View, TouchableOpacity} from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'

import WrittenAnswer from '../../components/WrittenAnswer'
import MultipleChoiceAnswer from '../../components/MultipleChoice/MultipleChoiceAnswer'
import Scale from '../../components/Scale'

const Survey = ({}) => {
  return (
    <View style={styles.feedbackContainer}>
      <View style={styles.headerNavBarWrapper}>
        <Image style={styles.headerNavBar} source={require ('../../assets/images/main-nav-bar.png')}/>
      </View>
      <View style={styles.pageTitleWrapper}>
        <Text style={styles.pageTitle}>Settings</Text>
      </View>
      
      <View style={styles.logoContainer}><Text>ECHO</Text></View>
      <View style={styles.feedbacktitle}><Text>End of Proj. Eval</Text></View>
      <View style={styles.feedbackQuestion}><Text>What type of question do you want to ask?</Text></View>
      <TouchableOpacity activeOpacity={0.7}><View style={styles.feedbackOptions}><Text>Written Answer</Text></View></TouchableOpacity>
      <View style={styles.feedbackOptionDivider}></View>
      <TouchableOpacity activeOpacity={0.7}><View style={styles.feedbackOptions2}><Text>Multiple Choice</Text></View></TouchableOpacity>
      <View style={styles.feedbackOptionDivider}></View>
      <TouchableOpacity activeOpacity={0.7}><View style={styles.feedbackOptions3}><Text>Scale</Text></View></TouchableOpacity>
    </View>
  )
}

export default Survey 