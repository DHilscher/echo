import { StyleSheet } from 'react-native'

import { colors, margins } from '../../config/styles';

export default StyleSheet.create({
  feedbackContainer:{
    height: '100%',
    backgroundColor: colors.mainGreen
  },

  logoContainer:{
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },

  feedbacktitle:{
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGreen,
    // marginBottom: margins.marginS
  },

  feedbackQuestion:{
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainGreen
  },

  feedbackOptions:{
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF80'
  },

  feedbackOptionDivider:{
    height: 2,
    backgroundColor: 'white'
  },

  feedbackOptions2:{
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#FFFFFF80'
  },

  feedbackOptions3:{
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF80'
  },

  surveyTitle:{
    color: 'white'
  }
})