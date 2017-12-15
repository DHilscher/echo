import { StyleSheet } from 'react-native'

import { colors, margins, textSizes, typography } from '../../config/styles';

export default StyleSheet.create({
  feedbackContainer:{
    height: '100%',
    backgroundColor: colors.mainGreen
  },

  surveytitlecontainer:{
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGreen
  },

  scenetitle:{
    color: 'white',
    fontSize: textSizes.title2,
    fontFamily: typography.fontBlack
  },

  surveyTitle:{
    color: 'white',
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontHeavy,
    paddingHorizontal: 80,
    textAlign: 'center'
  },

  feedbacktitlecontainer:{
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.darkGreen,
    marginBottom: margins.marginS
  },

  feedbackQuestion:{
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainGreen
  },

  feedbackOptions:{
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF80'
  },

  feedbackTitle:{
    color: 'white',
    fontSize: textSizes.title3,
    fontFamily: typography.fontBlack
  },

  feedbackOptionDivider:{
    height: 2.5,
    backgroundColor: 'white'
  },

  nextbutton:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: 40
  },

  addbutton:{
    position: 'absolute',
    right: 30,
    bottom: 100
  }
})