import { StyleSheet } from 'react-native';

import { colors, typography, textSizes } from '../../../config/styles';

const styles = StyleSheet.create({
  fullWidthButtonWrapper: {
    height: 90,
    backgroundColor: colors.backgroundLightGreen,
    justifyContent: 'center',
  },
  fullWidthButtonText: {
    fontFamily: typography.fontHeavy,
    fontSize: textSizes.title3,
    color: 'white',
    textAlign: 'center',
  },
})

export default styles;