import { StyleSheet } from 'react-native'

import { colors, margins, textSizes, typography } from '../../config/styles';

export default StyleSheet.create({
  scaleContainer:{
    backgroundColor: colors.mainGreen,
    height: '100%'
  },

  scaletitlecontainer:{
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

  scaleinstruction:{
    color: 'white',
    fontSize: textSizes.bodyL,
    fontFamily: typography.fontBlack,
    margin: margins.marginL,
    marginHorizontal: 40,
    textAlign: 'center'
  },

  textInputStyle:{
    backgroundColor: '#FFFFFF80',
    color: colors.darkGreen,
    margin: margins.marginL,
    padding: margins.marginM,
    fontFamily: typography.fontHeavy,
    height: 100,
    borderRadius: 10,
    marginBottom: 40
  }

})