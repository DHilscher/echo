import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

export default StyleSheet.create({
  questionWrapper: {
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
  feedbackImage: {
    alignItems: 'center',
  },
  // below are the style for project-base scene
  projectContainer: {
    backgroundColor: colors.backgroundLightGreen,
  },
  optionProjectWrapper: {
    backgroundColor: colors.backgroundLightGreen,
    padding: margins.marginL,
    paddingBottom: 0,
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
})