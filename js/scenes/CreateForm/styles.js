import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
  headerNavBarWrapper: {
    alignItems: 'center',
  },
  headerNavBar: {
    width: '100%',
    minHeight: 90,
  },
  pageTitleWrapper: {
    backgroundColor: colors.darkGreen,
    minHeight: 60,
    justifyContent: 'center',
    padding: margins.marginS,
  },
  textFieldText: {
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.title2,
    textAlign: 'center',
    color: 'white',
  },

  feedbackContainer:{
    height: '100%',
    backgroundColor: colors.lightestGreen,
  },
  questionWrapper: {
    backgroundColor: colors.mainGreen,
    justifyContent: 'center',
    padding: margins.marginL,
    paddingBottom: margins.marginM,
  },
  questionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: textSizes.title3,
    fontFamily: typography.fontHeavy,
  },
  surveyImage: {
    alignItems: 'center',
    backgroundColor: colors.lightestGreen,
    paddingTop: margins.marginS,
    paddingBottom: margins.marginL,
  },
  addButtonContainer: {
    flex: 1,
    height: 90,
  },
  mainGreenView: {
    backgroundColor: colors.mainGreen,
    height: 45,
  },
  lightGreenView: {
    backgroundColor: colors.lightestGreen,
    height: 45,
  },
  addButtonWrapper: {
    alignItems: 'center',
  },
})