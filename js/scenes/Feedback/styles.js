import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
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
  pageTitle: {
    color: 'white',
    textAlign: 'center',
    fontSize: textSizes.title2,
    fontFamily: typography.fontHeavy,
  },
  questionWrapper: {
    minHeight: 88,
    backgroundColor: colors.mainGreen,
    justifyContent: 'center',
    padding: margins.marginL,
  },
  questionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: textSizes.title3,
    fontFamily: typography.fontHeavy,
  },
  optionWrapper: {
    minHeight: 88,
    backgroundColor: colors.backgroundLightGreen,
    justifyContent: 'center',
  },
  optionText: {
    color: 'white',
    textAlign: 'center',
    fontSize: textSizes.title3,
    fontFamily: typography.fontHeavy,
  },
})