import React from 'react'
import { Text, View, Image, ScrollView } from 'react-native'

import styles from './styles'
import PropTypes from 'prop-types'

const SurveyAnswer = ({answer}) => {
  // scaleQuestion, multipleQuestion, writtenQuestion

  return (
    <ScrollView style={styles.answerContainer}>
      <View style={styles.headerNavBarWrapper}>
          <Image style={styles.headerNavBar} source={require ('../../assets/images/main-nav-bar.png')}/>
        </View>

        <View style={styles.titlecontainer}><Text style={styles.scenetitle}>{answer.title}</Text></View>

      <View style={styles.answerCollection}>
    
        <View style={styles.singleQnA}>
          <View style={styles.index}>
            <Text style={styles.number}>1</Text>
          </View>
          <Text style={styles.question}>How was your overall experience with working with me?</Text>          
          <Text style={styles.longAnswer}>{answer.answer1}</Text>
        </View>

        <View style={styles.singleQnA}>
          <View style={styles.index}>
            <Text style={styles.number}>2</Text>
          </View>
          <Text style={styles.question}>What do you think was my biggest strength in this project?</Text>
          <Text style={styles.shortAnswer}>{answer.answer2}</Text>
        </View>


        <View style={styles.singleQnA}>
          <View style={styles.index}>
            <Text style={styles.number}>3</Text>
          </View>
          <Text style={styles.question}>On a scale of 1 - 10 (with 1 being unsatisfied and 10 being very satisfied) how satisfied are you with my work?</Text>
          <Text style={styles.scale}>{answer.scale}</Text>
          <Text style={styles.longAnswer}>{answer.answer3}</Text>
        </View>

      </View>
    </ScrollView>
  )
}

export default SurveyAnswer