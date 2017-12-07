import { StyleSheet } from 'react-native';

import { colors, typography, textSizes, margins } from '../../config/styles';

const styles = StyleSheet.create({
  // Below are the styles for a single button
  buttonWrapper: {
    alignItems: 'center',
  },
  button: {
    flex: 0,
    backgroundColor: colors.red,
    borderRadius: 50,
  },
  buttonText: {
    fontFamily: typography.fontBlack,
    fontSize: textSizes.bodyL,
    color: 'white',
    textAlign: 'center',
    marginVertical: margins.marginS,
    marginHorizontal: margins.marginL + margins.marginL,
  },
  // Below are the styles for full width button
  fullWidthButtonWrapper: {
    height: 90,
    backgroundColor: colors.backgroundLightGreen,
    justifyContent: 'center',
  },
  fullWidthButtonText: {
    fontFamily: typography.fontBlack,
    fontSize: textSizes.title3,
    color: 'white',
    textAlign: 'center',
  },
  // Below are the styles for square button
  squareWrapper: {
    width: 90,
    height: 90,
    backgroundColor: colors.yellow,
    justifyContent: 'center',
  },
  squareButtonText: {
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.body,
    color: 'white',
    textAlign: 'center',
  }
});

export default styles;