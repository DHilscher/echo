import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  homeWrapper: {
    flex: 1,
  },
  headerWrapper: {
    flex: 2.5,
    backgroundColor: colors.backgroundLightGreen,
    alignItems: "center"
  },
  headerTextWrapper: {
    flex: 1,
    backgroundColor: colors.backgroundLightGreen,
    justifyContent: "center",
  },
  headerText: {
    color: "white",
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.title3,
    textAlign: "center",
  },
  feedbackWrapper: {
    flex: 1,
    backgroundColor: colors.darkGreen,
  },
  projectWrapper: {
    flex: 1,
    backgroundColor: colors.mainGreen,
  },
  resultWrapper: {
    flex: 1,
    backgroundColor: colors.red,
  },
  settingWrapper: {
    flex: 1,
    backgroundColor: colors.yellow,
  },
  navImage: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  navTextWrapper: {
    flex: 1,
    justifyContent: "center",
  },
  navText: {
    color: "white",
    fontFamily: typography.fontBlack,
    fontSize: textSizes.title2,
    textAlign: "center",
    backgroundColor: "transparent",
  },
});

export default styles;