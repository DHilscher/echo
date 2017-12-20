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
    height: '100%'
  },
  projectListContainer: {
    backgroundColor: colors.backgroundLightGreen,
    height: '100%',
    paddingHorizontal: margins.marginS,
    paddingVertical: margins.marginL,
    flex: 1,
  },
  optionProjectWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  addbutton:{
    position: 'absolute',
    right: 25,
    bottom: 25
  }
})