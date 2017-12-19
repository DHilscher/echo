import { StyleSheet } from 'react-native'

import { colors, margins, textSizes, typography } from '../../config/styles';

export default StyleSheet.create({
  multipleContainer:{
    backgroundColor: colors.mainGreen,
    height: '100%'
  },

  multipletitlecontainer:{
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

  multipleinstruction:{
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
  },

  textInputOptionStyle:{
    backgroundColor: '#FFFFFF80',
    color: colors.darkGreen,
    fontFamily: typography.fontHeavy,
    margin: 5,
    width: '100%',
    height: 30,
    borderRadius: 10
  },

  target:{
    alignSelf: 'center',
    marginTop: 10
  },

  MCAnswerView:{
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginHorizontal: 25,
    marginVertical: margins.marginS,
    width: '80%'
  },

  letteroption:{
    color: 'white',
    fontSize: textSizes.title2,
    fontFamily: typography.fontBlack,
    marginRight: 5
  },

  addbutton:{
    marginTop: 20
  }
})