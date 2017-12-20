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
  projectListContainer: {
    backgroundColor: colors.backgroundLightGreen,
    paddingHorizontal: margins.marginS,
    paddingVertical: margins.marginL,
    flex: 1,
    alignItems: 'center',
  },
  optionProjectWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },

})